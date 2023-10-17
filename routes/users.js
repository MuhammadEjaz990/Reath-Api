// routes/users.js
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const express = require('express');

const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3001;
const ngrok = require('ngrok');
require('dotenv').config();

const nodemailer = require('nodemailer');
const router = express.Router();
const User = require('../models/user');
const ImageData = require('../models/ImageData');
const bcrypt = require('bcryptjs');
const { JSDOM } = require('jsdom');




const axios = require('axios');

const multer = require('multer');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './offer_memorandum_creation/images');  // Save to the 'images' directory inside 'offer_memorandum_creation'.
    },
    filename: function (req, file, cb) {
        cb(null, 'logo_transparent.png');
    }
});

const upload = multer({ storage: storage });

// router.post('/runfunction', upload.single('image'), async (req, res) => {
//     if (req.file) {
//         console.log('File uploaded successfully');
//         res.status(200).send('File uploaded successfully');
//     } else {
//         console.error('No file uploaded or error in uploading');
//         res.status(400).send('No file uploaded or error in uploading');
//     }
// });

router.post('/runfunction', async (req, res) => {
    const {
        image_urlArray,
        image_LogourlArray,
        allData,
        FloorPlanimage_LogourlArray,
        text_and_narratives_url

    } = req.body;


    const payload = {
        image_urlArray,
        image_LogourlArray,
        allData,
        FloorPlanimage_LogourlArray,
        text_and_narratives_url
    };
    try {
        console.time("pdf-generation");
        const pdfBuffer = await generatePDF(payload);
        console.timeEnd("pdf-generation");

        console.time("response-sending");
        res.setHeader('Content-Type', 'application/pdf');
        res.end(pdfBuffer);
        console.timeEnd("response-sending");

    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send({ error: 'Failed to generate PDF' });
    }
});



const generatePDF = async (payload) => {
    console.log("Enter to generate book")
    const browser = await puppeteer.launch({
        headless: true 
    });

    const page = await browser.newPage();
    await page.setCacheEnabled(false); 
    page.on('error', err => {
        console.error('Page error:', err);
    });
    page.on('pageerror', err => {
        console.error('Page unhandled rejection:', err);
    });

    page.on('console', msg => {
        console.log('PAGE LOG:', msg.text());
    });

    const absolutePath = path.resolve('/home/ejaz/Project/Reath_Project/Reath-api/offer_memorandum_creation/index.html');
    await page.goto(`file://${absolutePath}`, { waitUntil: 'networkidle2' });
    await page.reload({ waitUntil: 'networkidle2' });



    const templatePath = path.join(process.cwd(), '/offer_memorandum_creation/index.html');
    let template = fs.readFileSync(templatePath, 'utf-8');




    page.on('requestfailed', request => {
        console.log(`Request failed: ${request.url()}`);
    });

    const logo1 = payload.image_LogourlArray[0] || 'N/A'; 
    const logo2 = payload.image_LogourlArray[1] || logo1; 










    const floorPlan1 = payload.FloorPlanimage_LogourlArray[0] || 'N/A';  
    const floorPlan2 = payload.FloorPlanimage_LogourlArray[1] || floorPlan1; 

    const getReplacementImage = (index) => payload.image_urlArray[index] || payload.image_urlArray[0] || "";

    template = template
        .replace(/\[p1-bg\]/g, getReplacementImage(0))
        .replace(/\[p4-bg\]/g, getReplacementImage(1))
        .replace(/\[p40-bg\]/g, getReplacementImage(2))
        .replace(/\[c7-bg\]/g, getReplacementImage(3))
        .replace(/\[pholder-bg\]/g, getReplacementImage(4))

        .replace(/\[logo1\]/g, logo1)
        .replace(/\[logo2\]/g, logo2)

        .replace(/\[FloorPlan1\]/g, floorPlan1)
        .replace(/\[FloorPlan2\]/g, floorPlan2)





        .replace(/\[cityName\]/g, payload.allData.page1?.city_name)
        .replace(/\[Address3\]/g, payload.allData.page3?.address)




        .replace(/\[page8left\]/g, payload.allData.page8?.left)
        .replace(/\[page8right\]/g, payload.allData.page8?.right)


        .replace(/\[page9right\]/g, payload.allData.page9?.right)

        .replace(/\[page10left\]/g, payload.allData.page10?.left)
        .replace(/\[page10right\]/g, payload.allData.page10?.right)


        .replace(/\[page11left\]/g, payload.allData.page11?.left)


        .replace(/\[page12left\]/g, payload.allData.page12?.left)


        .replace(/\[page13left\]/g, payload.allData.page13?.left)



        .replace(/\[page15offer_terms\]/g, payload.allData.page15?.offer_terms)
        .replace(/\[page15war_room\]/g, payload.allData.page15?.war_room)
        .replace(/\[page15offer_due\]/g, payload.allData.page15?.offer_due)




        .replace(/\[page3\]/g, payload.allData?.page3)
        .replace(/\[page5_summary\]/g, payload.allData.page5?.exe_summary)
        .replace(/\[page6_summary\]/g, payload.allData.page6?.tof_summary)
        .replace(/\[page6_tabel\]/g, payload.allData.page6?.tof_table)
        .replace(/\[page7_summary\]/g, payload.allData.page7?.um_summary)
        .replace(/\[page7_tabel\]/g, payload.allData.page7?.um_table)
        .replace(/\[page9_tabel\]/g, payload.allData?.page9)
        // .replace(/\[page10_tabel\]/g, payload.allData?.page10)
        .replace(/\[page11\]/g, payload.allData.page11)
        .replace(/\[Product Name\]/g, "Good Night Vape")


    await page.evaluate((template, payload) => {
        console.log("Payload before injection:", payload);

        document.body.innerHTML = template;
        window.myInjectedData = payload;
        console.log('Injected Data:', window.myInjectedData);
        const event = new Event('dataInjected');
        window.dispatchEvent(event);
    }, template, payload);




    await delay(10000);
    const myData = await page.evaluate(() => {
        return window.myInjectedData;
    });

    console.log("Data from Puppeteer backend:", myData);
    const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.scrollWidth,
            height: document.documentElement.scrollHeight,
        };
    });

    const pdfBuffer = await page.pdf({
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
        printBackground: true,
    });

    // const pdfBuffer = await page.pdf({
    //     width: '1920px',
    //     height: '1080px',
    //     printBackground: true,
    // });
    const outputPath = path.resolve('./output.pdf');
    fs.writeFileSync(outputPath, pdfBuffer);

    console.log(`PDF saved to ${outputPath}`);

    await browser.close();

    return pdfBuffer;  // Return the PDF buffer directly
};


const delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}


router.post('/proxyLambda', async (req, res) => {

    console.log('this is my data', req.body)
    try {
        const response = await axios.post("http://192.168.18.90:3095/get_information", req.body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error calling lambda:", error);
        res.status(error.response?.status || 500).send("Error calling lambda function.");
    }
});


module.exports = router;
