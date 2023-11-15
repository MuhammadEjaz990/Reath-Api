// routes/users.js
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const express = require('express');


const config = require('../config');
const cors = require('cors');
const mongoose = require('mongoose');
const ngrok = require('ngrok');
require('dotenv').config();

const nodemailer = require('nodemailer');
const router = express.Router();
const User = require('../models/user');
const ImageData = require('../models/ImageData');
const bcrypt = require('bcryptjs');
const { JSDOM } = require('jsdom');

const env = process.env.NODE_ENV || "development";


const axios = require('axios');

const multer = require('multer');



// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './offer_memorandum_creation/images');  // Save to the 'images' directory inside 'offer_memorandum_creation'.
//     },
//     filename: function (req, file, cb) {
//         cb(null, 'logo_transparent.png');
//     }
// });

// const upload = multer({ storage: storage });

// router.post('/generatingPDF', upload.single('image'), async (req, res) => {
//     if (req.file) {
//         console.log('File uploaded successfully');
//         res.status(200).send('File uploaded successfully');
//     } else {
//         console.error('No file uploaded or error in uploading');
//         res.status(400).send('No file uploaded or error in uploading');
//     }
// });

router.post('/generatingPDF', async (req, res) => {
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
        headless: "new"
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


    const absolutePath = path.resolve(config[env].path);





    // // const absolutePath = path.resolve('/home/ubuntu/Reath-Api/offer_memorandum_creation/index.html');
    // const absolutePath = path.resolve('/home/ejaz/Project/Reath_Project/Reath-api/offer_memorandum_creation/index.html');
    await page.goto(`file://${absolutePath}`, { waitUntil: 'networkidle2' });
    await page.reload({ waitUntil: 'networkidle2' });



    const templatePath = path.join(process.cwd(), '/Offer_memorandum_temp/index.html');
    let template = fs.readFileSync(templatePath, 'utf-8');




    page.on('requestfailed', request => {
        console.log(`Request failed: ${request.url()}`);
    });


    // const updatedTemplate = Template1(template, payload);
    const updatedTemplate = Template2(template, payload);



    await page.evaluate((template, payload) => {
        console.log("Payload before injection:", payload);

        document.body.innerHTML = template;
        window.myInjectedData = payload;
        console.log('Injected Data:', window.myInjectedData);
        const event = new Event('dataInjected');
        window.dispatchEvent(event);
    }, updatedTemplate, payload);




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

    // const pdfBuffer = await page.pdf({
    //     width: `${dimensions.width}px`,
    //     height: `${dimensions.height}px`,
    //     printBackground: true,
    // });

    const pdfBuffer = await page.pdf({
        width: '1920px',
        height: '1080px',
        printBackground: true,
    });
    const outputPath = path.resolve('./output.pdf');
    fs.writeFileSync(outputPath, pdfBuffer);

    console.log(`PDF Created Done`);

    await browser.close();

    return pdfBuffer;  // Return the PDF buffer directly
};


const delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}


router.post('/proxyLambda', async (req, res) => {

    console.log('this is my data', req.body)
    console.log('my api link', config[env].url)
    try {
        const response = await axios.post(config[env].url, req.body, {
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












function Template2(template, payload) {


    const logo1 = payload.image_LogourlArray[0] || 'N/A';
    const logo2 = payload.image_LogourlArray[1] || logo1;






    const defaultImage = 'N/A';

    let images = payload.FloorPlanimage_LogourlArray.length > 0 ? payload.FloorPlanimage_LogourlArray : [defaultImage];

    // If less than 6 images are uploaded, repeat the existing ones to fill all the 6 placeholders.
    while (images.length < 6) {
        images = images.concat(images);
    }

    // Now, images[] contains at least 6 URLs. Take the first 6.
    images = images.slice(0, 6);



    // const floorPlan1 = payload.FloorPlanimage_LogourlArray[0] || 'N/A';
    // const floorPlan2 = payload.FloorPlanimage_LogourlArray[1] || floorPlan1;

    const getReplacementImage = (index) => payload.image_urlArray[index] || payload.image_urlArray[0] || "";

    template = template
        .replace(/\[p1-bg\]/g, getReplacementImage(0))
        .replace(/\[p4-bg\]/g, getReplacementImage(1))
        .replace(/\[p40-bg\]/g, getReplacementImage(2))
        .replace(/\[c7-bg\]/g, getReplacementImage(3))
        .replace(/\[pholder-bg\]/g, getReplacementImage(4))

        .replace(/\[logo1\]/g, logo1)
        .replace(/\[logo2\]/g, logo2)

        // .replace(/\[FloorPlan1\]/g, floorPlan1)
        // .replace(/\[FloorPlan2\]/g, floorPlan2)

        .replace(/\[FloorPlan1\]/g, images[0])
        .replace(/\[FloorPlan2\]/g, images[1])
        .replace(/\[FloorPlan3\]/g, images[2])
        .replace(/\[FloorPlan4\]/g, images[3])
        .replace(/\[FloorPlan5\]/g, images[4])
        .replace(/\[FloorPlan6\]/g, images[5])




        .replace(/\[dataFromGetAll\]/g, payload.allData?.dataFromGetAll ?? "N/A")
        .replace(/\[propertyName\]/g, payload.allData?.propertyName ?? "N/A")
        .replace(/\[title\]/g, payload.allData?.title ?? "N/A")
        .replace(/\[tagLine\]/g, payload.allData?.tagLine ?? "N/A")
        .replace(/\[exeSummary\]/g, payload.allData?.exeSummary ?? "N/A")
        .replace(/\[salientFeatures\]/g, payload.allData?.salientFeatures ?? "N/A")




        .replace(/\[location\]/g, payload.allData?.location ?? "N/A")
        .replace(/\[companyName\]/g, payload.allData?.companyName ?? "N/A")
        .replace(/\[highlights\]/g, payload.allData?.highlights[0] ?? "N/A")



        .replace(/\[HighlightHeading\]/g, payload.allData?.highlights?.[2]?.heading)
        .replace(/\[HighlightDescription\]/g, payload.allData?.highlights?.[2]?.description)

        .replace(/\[HighlightHeading1\]/g, payload.allData?.highlights?.[0]?.heading)
        .replace(/\[HighlightDescription1\]/g, payload.allData?.highlights?.[0]?.description)

        .replace(/\[HighlightHeading2\]/g, payload.allData?.highlights?.[1]?.heading)
        .replace(/\[HighlightDescription2\]/g, payload.allData?.highlights?.[1]?.description)



        // .replace(/\[PositionNear\]/g, payload.allData?.PositionNear)








        // .replace(/\[highlights\]/g, payload.allData?.rentcomparable ?? "N/A")



        .replace(/\[numUnits\]/g, payload.allData?.numUnits ?? "N/A")
        .replace(/\[yearBuilt\]/g, payload.allData?.yearBuilt ?? "N/A")
        .replace(/\[occupancyPercentage\]/g, payload.allData?.occupancyPercentage ?? "N/A")
        .replace(/\[rentPerUnit\]/g, payload.allData?.rentPerUnit ?? "N/A")
        .replace(/\[rentPerSF\]/g, payload.allData?.rentPerSF ?? "N/A")





        .replace(/\[KeyHighlightsHeading\]/g, payload?.allData?.keyHighlightsFirst?.[0]  ?? "Unparalleled luxury and exceptional amenities")
        .replace(/\[KeyHighlightsHeading2\]/g, payload?.allData?.keyHighlightsFirst2?.[0] ?? "Convenient access to employment, culture, and business hubs")







        .replace(/\[Page1_address\]/g, payload.allData.page1?.address)
        .replace(/\[Page1_title\]/g, payload.allData.page1?.title)

        .replace(/\[Page2_title\]/g, payload.allData.page2?.title)
        .replace(/\[Page2_exe_summary\]/g, payload.allData.page2?.exe_summary)

        .replace(/\[Page3_rightText\]/g, payload.allData.page3?.rightText)

        .replace(/\[Page4_Highlight\]/g, payload.allData.page4?.Highlight)



    // let str = "..."; // your original string

    // // Check if highlights array exists and has at least one element
    // if (payload.allData?.highlights && payload.allData.highlights.length > 0) {
    //     str = str.replace(/\[HighlightHeading1\]/g, payload.allData.highlights[0]?.heading || '')
    //         .replace(/\[HighlightDescription1\]/g, payload.allData.highlights[0]?.description || '');
    // } else {
    //     // Replace with empty strings if the highlight is not found
    //     str = str.replace(/\[HighlightHeading1\]/g, '')
    //         .replace(/\[HighlightDescription1\]/g, '');
    // }

    // // Check if highlights array exists and has at least two elements
    // if (payload.allData?.highlights && payload.allData.highlights.length > 1) {
    //     str = str.replace(/\[HighlightHeading2\]/g, payload.allData.highlights[1]?.heading || '')
    //         .replace(/\[HighlightDescription2\]/g, payload.allData.highlights[1]?.description || '');
    // } else {
    //     // Replace with empty strings if the highlight is not found
    //     str = str.replace(/\[HighlightHeading2\]/g, '')
    //         .replace(/\[HighlightDescription2\]/g, '');
    // }

    // // Continue with the rest of your code...

    return template
}



// Example usage:


function Template1(template, payload) {

    const logo1 = payload.image_LogourlArray[0] || 'N/A';
    const logo2 = payload.image_LogourlArray[1] || logo1;

    const defaultImage = 'N/A';

    let images = payload.FloorPlanimage_LogourlArray.length > 0 ? payload.FloorPlanimage_LogourlArray : [defaultImage];

    // If less than 6 images are uploaded, repeat the existing ones to fill all the 6 placeholders.
    while (images.length < 6) {
        images = images.concat(images);
    }

    // Now, images[] contains at least 6 URLs. Take the first 6.
    images = images.slice(0, 6);

    // const floorPlan1 = payload.FloorPlanimage_LogourlArray[0] || 'N/A';
    // const floorPlan2 = payload.FloorPlanimage_LogourlArray[1] || floorPlan1;

    const getReplacementImage = (index) => payload.image_urlArray[index] || payload.image_urlArray[0] || "";

    template = template
        .replace(/\[p1-bg\]/g, getReplacementImage(0))
        .replace(/\[p4-bg\]/g, getReplacementImage(1))
        .replace(/\[p40-bg\]/g, getReplacementImage(2))
        .replace(/\[c7-bg\]/g, getReplacementImage(3))
        .replace(/\[pholder-bg\]/g, getReplacementImage(4))

        .replace(/\[logo1\]/g, logo1)
        .replace(/\[logo2\]/g, logo2)

        // .replace(/\[FloorPlan1\]/g, floorPlan1)
        // .replace(/\[FloorPlan2\]/g, floorPlan2)

        .replace(/\[FloorPlan1\]/g, images[0])
        .replace(/\[FloorPlan2\]/g, images[1])
        .replace(/\[FloorPlan3\]/g, images[2])
        .replace(/\[FloorPlan4\]/g, images[3])
        .replace(/\[FloorPlan5\]/g, images[4])
        .replace(/\[FloorPlan6\]/g, images[5])
        .replace(/\[cityName\]/g, payload.allData.page1?.city_name)
        .replace(/\[Address3\]/g, payload.allData.page3?.address)
        .replace(/\[page5_summary\]/g, payload.allData.page5?.exe_summary)
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
        .replace(/\[page26Left\]/g, payload.allData.page26?.left)
        .replace(/\[page27_summary\]/g, payload.allData.page27?.description)
        .replace(/\[page29_growing_biotech\]/g, payload.allData.page29?.growing_biotech)
        .replace(/\[page29_capital\]/g, payload.allData.page29?.capital)
        .replace(/\[page31_downtown\]/g, payload.allData.page31?.downtown)
        .replace(/\[page31_conventioncenter\]/g, payload.allData.page31?.conventioncenter)
        .replace(/\[page31_goldencenter\]/g, payload.allData.page31?.goldencenter)
    return template
}





















module.exports = router;
