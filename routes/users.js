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
// Login endpoint



const axios = require('axios');

const multer = require('multer');


// Configure multer storage
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
        const pdfBuffer = await generatePDF(payload);

        res.setHeader('Content-Type', 'application/pdf');

        res.end(pdfBuffer);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send({ error: 'Failed to generate PDF' });
    }
});

// router.post('/runfunction', async (req, res) => {
//     const imageUrl = req.body.image_url;

//     if (imageUrl) {
//         try {
//             const pdfBuffer = await generatePDF(imageUrl);

//             res.setHeader('Content-Type', 'application/pdf');

//             res.end(pdfBuffer);
//         } catch (error) {
//             console.error('Error generating PDF:', error);
//             res.status(500).send({ error: 'Failed to generate PDF' });
//         }
//     }
// });


const generatePDF = async (payload) => {
    console.log("Enter to generate book");

    const dom = new JSDOM(payload.allData.page10);
    const document = dom.window.document;

    // Get all img tags (assuming there's at least one)
    const images = document.querySelectorAll('img');
    for (const img of images) {
        img.setAttribute('src', payload.image_LogourlArray[0]);
    }

    // Serialize the modified HTML back into the payload
    payload.allData.page10 = dom.serialize();

    const browser = await puppeteer.launch({
        headless: true // Set headless to true or false
    });

    const page = await browser.newPage();
    await page.setCacheEnabled(false);  // Yahan add karein
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
    await page.goto(`file://${absolutePath}`, { waitUntil: 'networkidle2' });  // 'networkidle2' yahan use karein
    await page.reload({ waitUntil: 'networkidle2' });

    const templatePath = path.join(process.cwd(), '/offer_memorandum_creation/index.html');
    let template = fs.readFileSync(templatePath, 'utf-8');
    // console.log('this is my object', payload.allData.page5.property_overview.Address)


    // try {
    //     // propertyData = JSON.parse(payload.allData.page5.property_overview);
    //     propertyData = payload.allData.page5.property_overview;
    // } catch (error) {
    //     console.error("Error parsing property_overview:", error);
    // }


    // try {
    //     // page8Data = JSON.parse(payload.allData.page8);
    //     page8Data = payload.allData.page8
    // } catch (error) {
    //     console.error("Error parsing page8 data:", error);
    // }
    // Replace placeholders in the template


    const logo1 = payload.image_LogourlArray[0] || 'N/A';  // Default image ya placeholder image ka link bhi yahan use kiya ja sakta hai
    const logo2 = payload.image_LogourlArray[1] || logo1; // Agar dusri image nahi hai toh pehli image ka link use hoga
    









    const floorPlan1 = payload.FloorPlanimage_LogourlArray[0] || 'N/A';  // Default image ya placeholder image ka link bhi yahan use kiya ja sakta hai
    const floorPlan2 = payload.FloorPlanimage_LogourlArray[1] || floorPlan1; // Agar dusri image nahi hai toh pehli image ka link use hoga

    template = template.replace(/\[p1-bg\]/g, payload.image_urlArray[0])
        .replace(/\[p4-bg\]/g, payload.image_urlArray[1])
        .replace(/\[p40-bg\]/g, payload.image_urlArray[2])
        .replace(/\[c7-bg\]/g, payload.image_urlArray[3])
        .replace(/\[pholder-bg\]/g, payload.image_urlArray[4])

        .replace(/\[logo1\]/g, logo1)
        .replace(/\[logo2\]/g, logo2)

        .replace(/\[FloorPlan1\]/g, floorPlan1)
        .replace(/\[FloorPlan2\]/g, floorPlan2)
    
        .replace(/\[page3\]/g, payload.allData.page3)
        .replace(/\[page5_summary\]/g, payload.allData.page5.exe_summary)
        .replace(/\[page6_summary\]/g, payload.allData.page6.tof_summary)
        .replace(/\[page6_tabel\]/g, payload.allData.page6.tof_table)
        .replace(/\[page7_summary\]/g, payload.allData.page7.um_summary)
        .replace(/\[page7_tabel\]/g, payload.allData.page7.um_table)
        .replace(/\[page9_tabel\]/g, payload.allData.page9)
        .replace(/\[page10_tabel\]/g, payload.allData.page10)
    
        .replace(/\[page11\]/g, payload.allData.page11)
        .replace(/\[Product Name\]/g, "Good Night Vape")




        // .replace(/\[Address\]/g, payload.allData.page5.property_overview.Address)
        // .replace(/\[Location\]/g, payload.allData.page5.property_overview.Location)
        // .replace(/\[Year Built\]/g, payload.allData.page5.property_overview["Year Built"])
        // .replace(/\[Units\]/g, payload.allData.page5.property_overview.Units)
        // .replace(/\[Avg. Unit Size\]/g, payload.allData.page5.property_overview["Avg. Unit Size"])
        // .replace(/\[Residential\]/g, payload.allData.page5.property_overview.Residential)
        // .replace(/\[Parking Spaces\]/g, payload.allData.page5.property_overview["Parking Spaces"])
        // .replace(/\[Ground Lease Term\]/g, payload.allData.page5.property_overview["Ground Lease Term"])


        .replace(/\[Address\]/g, payload.allData.page5.property_overview.Address || 'N/A')
        .replace(/\[Location\]/g, payload.allData.page5.property_overview.Location || 'N/A')
        .replace(/\[Year Built\]/g, payload.allData.page5.property_overview["Year Built"] || 'N/A')
        .replace(/\[Units\]/g, payload.allData.page5.property_overview.Units || 'N/A')
        .replace(/\[Avg. Unit Size\]/g, payload.allData.page5.property_overview["Avg. Unit Size"] || 'N/A')
        .replace(/\[Residential\]/g, payload.allData.page5.property_overview.Residential || 'N/A')
        .replace(/\[Stories\]/g, payload.allData.page5.property_overview.Stories || 'N/A')
        .replace(/\[Parking Spaces\]/g, payload.allData.page5.property_overview["Parking Spaces"] || 'N/A')
        .replace(/\[Ground Lease Term\]/g, payload.allData.page5.property_overview["Ground Lease Term"] || 'N/A')




        .replace(/\[PROPERTY NAME\]/g, payload.allData.page8["PROPERTY NAME"] || 'N/A')
        .replace(/\[PROPERTY ADDRESS\]/g, payload.allData.page8["PROPERTY ADDRESS"] || 'N/A')
        .replace(/\[CITY\/COUNTY\]/g, payload.allData.page8["CITY/COUNTY"] || 'N/A')

        .replace(/\[HVAC\]/g, payload.allData.page8["HVAC"] || 'N/A')
        .replace(/\[MAIL BOXES\]/g, payload.allData.page8["MAIL BOXES"] || 'N/A')
        .replace(/\[APN\]/g, payload.allData.page8["APN"] || 'N/A')
        .replace(/\[YEAR BUILT\]/g, payload.allData.page8["YEAR BUILT"] || 'N/A')
        .replace(/\[APARTMENT UNITS\]/g, payload.allData.page8["APARTMENT UNITS"] || 'N/A')
        .replace(/\[STORIES\/STAIRS\]/g, payload.allData.page8["STORIES/STAIRS"] || 'N/A')
        .replace(/\[CONSTRUCTION TYPE\]/g, payload.allData.page8["CONSTRUCTION TYPE"] || 'N/A')
        .replace(/\[EXTERIOR WALL\]/g, payload.allData.page8["EXTERIOR WALL"] || 'N/A')
        .replace(/\[INTERIOR WALL\]/g, payload.allData.page8["INTERIOR WALL"] || 'N/A')
        .replace(/\[FOUNDATION\]/g, payload.allData.page8["FOUNDATION"] || 'N/A')
        .replace(/\[CEILING HEIGHTS\]/g, payload.allData.page8["CEILING HEIGHTS"] || 'N/A')
        .replace(/\[BUILDINGS\]/g, payload.allData.page8["BUILDINGS"] || 'N/A')
        .replace(/\[WATER HEATER\]/g, payload.allData.page8["WATER HEATER"] || 'N/A')
        .replace(/\[SITE SIZE ACRES\]/g, payload.allData.page8["SITE SIZE ACRES"] || 'N/A')
        .replace(/\[DENSITY DU\/ACRE\]/g, payload.allData.page8["DENSITY DU/ACRE"] || 'N/A')
        .replace(/\[APARTMENT RSF \]/g, payload.allData.page8["APARTMENT RSF "] || 'N/A')  // Note the space after RSF in the key
        .replace(/\[APARTMENT AVG. RSF\]/g, payload.allData.page8["APARTMENT AVG. RSF"] || 'N/A')
        .replace(/\[SMOKE DETECTORS\]/g, payload.allData.page8["SMOKE DETECTORS"] || 'N/A')
        .replace(/\[FIRE PROTECTION\]/g, payload.allData.page8["FIRE PROTECTION"] || 'N/A');









    await page.evaluate((template, payload) => {
        document.body.innerHTML = template;

        window.myInjectedData = payload;  // if you still want this line
        const event = new Event('dataInjected');
        window.dispatchEvent(event);
    }, template);
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




// router.post('/runfunction', async (req, res) => {
// console.log('this is done')
// generatePDF()
// });

// const generatePDF = async () => {
//     console.log("Enter to generate book");
//     const browser = await puppeteer.launch({
//         headless: true 
//     });

//     const page = await browser.newPage();

//     page.on('error', err => {
//         console.error('Page error:', err);
//     });
//     page.on('pageerror', err => {
//         console.error('Page unhandled rejection:', err);
//     });

//     page.on('console', msg => {
//         console.log('PAGE LOG:', msg.text());
//     });
//     const absolutePath = path.resolve('../../offer_memorandum_creation/index.html');

//     await page.goto(`file://${absolutePath}`, { waitUntil: 'networkidle0' });

//     const data = {value: 'ejaz'}
//     await page.evaluate((data) => {
//         window.myInjectedData = data;
//         const event = new Event('dataInjected');
//         window.dispatchEvent(event);
//     }, data);


//     const myData = await page.evaluate(() => {
//         return window.myInjectedData;
//     });

//     console.log("Data from Puppeteer backend:", myData);

//     const pdfBuffer = await page.pdf({
//         width: '1920px',
//         height: '1080px',
//         printBackground: true,
//     });

//     const outputPath = path.resolve('./output.pdf');
//     fs.writeFileSync(outputPath, pdfBuffer);

//     console.log(`PDF saved to ${outputPath}`);

//     await browser.close();
// };



router.post('/proxyLambda', async (req, res) => {

    console.log('this is my data', req.body )
    try {
        const response = await axios.post("http://192.168.18.90:3092/get_information", req.body, {
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
