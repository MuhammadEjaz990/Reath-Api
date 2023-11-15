

const PassProjectData = (ProjectData) => {


    // INVESTMENT CONTACTS
    const INVESTMENT_CONTACTS = ProjectData.allData.contactInfo

    // const INVESTMENT_CONTACTS = [
    //     {
    //         NAME: "CHRISTINE ESPENSHADE",
    //         EMAIL: "christine.espenshade@nmrk.com",
    //         TITLE: "Vice Chairman",
    //         DES: "+1 202  312 5741"
    //     },
    //     {
    //         NAME: "ROBERT GARRISH",
    //         EMAIL: "roabert.garrish@nmrk.com",
    //         TITLE: "Vice Chairman",
    //         DES: "+1 202  312 5479"
    //     },
    //     {
    //         NAME: "SHAWN MCDONALD",
    //         EMAIL: "shawn.mcdonald@nmrk.com",
    //         TITLE: "Vice Chairman",
    //         DES: "+1 703 918 0229"
    //     },
    //     {
    //         NAME: "GREG BURY",
    //         EMAIL: "gregory.bury@nmrk.com",
    //         TITLE: "Vice President",
    //         DES: "+1 202  312 5765"
    //     },

    // ]



    const INVESTMENT_CONTACTS_CONTAINER = document.getElementById('INVESTMENT_CONTACTS_CONTAINER');

    INVESTMENT_CONTACTS?.forEach(stackholder => {
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('InvestContactDiv');

        const nameP = document.createElement('p');
        nameP.classList.add('ExecutiveText');
        nameP.textContent = stackholder.NAME;
        innerDiv.appendChild(nameP);

        const titleP = document.createElement('p');
        titleP.classList.add('InvestmentText');
        titleP.textContent = stackholder.TITLE;
        innerDiv.appendChild(titleP);

        const phoneP = document.createElement('p');
        phoneP.classList.add('InvestmentText');
        phoneP.textContent = stackholder.DES;
        innerDiv.appendChild(phoneP);

        const emailP = document.createElement('p');
        emailP.classList.add('executiveEmail');
        emailP.textContent = stackholder.EMAIL;
        innerDiv.appendChild(emailP);


        INVESTMENT_CONTACTS_CONTAINER.appendChild(innerDiv);
    });






    //  DEBT
    // const DEBT = ProjectData.allData.page3?.stakeholder_info
    const DEBT = [

        {
            NAME: "Need Content",
            TITLE: "Need Content",
            DES: "Need Content",
            EMAIL: "Need Content",

        }
        ,
        {
            NAME: "Need Content",
            TITLE: "Need Content",
            DES: "Need Content",
            EMAIL: "Need Content",

        },


    ];




    const INVESTMENT_DEBT_CONTAINER = document.getElementById('INVESTMENT_DEBT_CONTAINER');

    DEBT?.forEach(stackholder => {
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('InvestContactDiv');

        const nameP = document.createElement('p');
        nameP.classList.add('ExecutiveText');
        nameP.textContent = stackholder.NAME;
        innerDiv.appendChild(nameP);

        const titleP = document.createElement('p');
        titleP.classList.add('InvestmentText');
        titleP.textContent = stackholder.TITLE;
        innerDiv.appendChild(titleP);

        const phoneP = document.createElement('p');
        phoneP.classList.add('InvestmentText');
        phoneP.textContent = stackholder.DES;
        innerDiv.appendChild(phoneP);

        const emailP = document.createElement('p');
        emailP.classList.add('executiveEmail');
        emailP.textContent = stackholder.EMAIL;
        innerDiv.appendChild(emailP);


        INVESTMENT_DEBT_CONTAINER.appendChild(innerDiv);
    });










    // KeyHighlights ----------------------------------------------------------- 
    // const KeyHighlights = ProjectData?.allData?.keyHighlightsFirst?.[1]


    const KeyHighlights = [
        "Projected annual effective rent growth of 4.3% from 2024 to 2027 in the Woodbridge submarket",

        "Resort-style swimming pool, fitness center, billiards table, co-working lounge, and more community amenities",

        "Close proximity to Potomac Mills, Virginia's largest outlet shopping and dining destination",

        "Numerous entertainment options including an AMC Theatre and popular eateries",

        "Opportunity for significant rental premiums by upgrading unit finishes and features",

        "Spacious and well-designed apartments with in-home washers and dryers, walk-in closets, and private balconies/patios",

        "Investment in capital improvements including roof replacements and enhanced landscaping"

    ]

    const KeyHighLightsDiv = document.querySelector('.KeyHighLightsDiv');

    KeyHighlights.forEach(text => {
        const pElement = document.createElement('p');
        pElement.className = 'amenitiesText';
        pElement.textContent = text;
        KeyHighLightsDiv.appendChild(pElement);
    });








    // KeyHighlight  Second----------------------------------------------------------- 
    // const KeyHighlightsecond = ProjectData?.allData?.keyHighlightsFirst2[1]
    const KeyHighlightsecond = [
        "Experience a vibrant culinary scene with a diverse range of restaurants offering unique dining experiences.",
        "Discover thriving business districts like Franconia/Springfield, Eisenhower Corridor/Hoffman Town Center, and Rosslyn-Ballston Corridor.",
        "Explore charming shopping villages and plazas such as Potomac Mills, Stonebridge at Potomac Town Center, and National Landing.",
        "Indulge in a variety of entertainment options, including world-class theaters, museums, sports teams, and live music venues.",
        "Uncover affluent neighborhoods like Tysons Corner, Merrifield, and the Rosslyn-Ballston Corridor known for their upscale amenities and high quality of life.",
        "Savor the diverse culinary offerings, ranging from international cuisine to local farm-to-table dining.",
        "Immerse yourself in bustling business districts housing major corporations and innovative startups.",
        "Shop to your heart's content at popular shopping villages and plazas with a wide selection of retail stores and dining options.",
        "Experience a vibrant entertainment scene with world-class theaters, museums, sports arenas, and live music venues providing endless entertainment options."
    ]

    const KeyHighLightsDivSecond = document.querySelector('.KeyHighLightsDivSecond');

    KeyHighlightsecond.forEach(text => {
        const pElement = document.createElement('li');
        pElement.className = 'amenitiesTextSecondPage';
        pElement.textContent = text;
        KeyHighLightsDivSecond.appendChild(pElement);
    });














    // page27_table4 
    let page27_table4 = ProjectData.allData.unitMix
    // let page27_table4 = { "header": [{ "id": "Unit Type", "label": "Unit Type" }, { "id": "# of Units", "label": "# of Units" }, { "id": "% of Unit Mix", "label": "% of Unit Mix" }, { "id": "Size (SF)", "label": "Size (SF)" }, { "id": "Avg. Market Rent", "label": "Avg. Market Rent" }, { "id": "Avg. Market Rent PSF", "label": "Avg. Market Rent PSF" }], "rows": [{ "Unit Type": " A1 (1 Bed / 1 Bath) ", "# of Units": "31", "% of Unit Mix": "10%", "Size (SF)": "627", "Avg. Market Rent": "$1,677", "Avg. Market Rent PSF": "$2.67" }, { "Unit Type": " A2 (1 Bed / 1 Bath) ", "# of Units": "19", "% of Unit Mix": "6%", "Size (SF)": "691", "Avg. Market Rent": "$1,720", "Avg. Market Rent PSF": "$2.49" }, { "Unit Type": " A3 (1 Bed / 1 Bath) ", "# of Units": "16", "% of Unit Mix": "5%", "Size (SF)": "750", "Avg. Market Rent": "$1,782", "Avg. Market Rent PSF": "$2.38" }, { "Unit Type": " B1 (2 Bed / 1 Bath) ", "# of Units": "27", "% of Unit Mix": "9%", "Size (SF)": "893", "Avg. Market Rent": "$2,007", "Avg. Market Rent PSF": "$2.25" }, { "Unit Type": " B2 (2 Bed / 2 Bath) ", "# of Units": "5", "% of Unit Mix": "2%", "Size (SF)": "917", "Avg. Market Rent": "$2,059", "Avg. Market Rent PSF": "$2.25" }, { "Unit Type": " B3 (2 Bed / 2 Bath) ", "# of Units": "42", "% of Unit Mix": "14%", "Size (SF)": "932", "Avg. Market Rent": "$2,028", "Avg. Market Rent PSF": "$2.18" }, { "Unit Type": " B4 (2 Bed / 2 Bath) ", "# of Units": "82", "% of Unit Mix": "27%", "Size (SF)": "1,072", "Avg. Market Rent": "$2,090", "Avg. Market Rent PSF": "$1.95" }, { "Unit Type": " B5 (2 Bed / 2 Bath) ", "# of Units": "54", "% of Unit Mix": "18%", "Size (SF)": "1,111", "Avg. Market Rent": "$2,111", "Avg. Market Rent PSF": "$1.90" }, { "Unit Type": " C1 (3 Bed / 2 Bath) ", "# of Units": "28", "% of Unit Mix": "9%", "Size (SF)": "1,294", "Avg. Market Rent": "$2,540", "Avg. Market Rent PSF": "$1.96" }, { "Unit Type": "Total / Average", "# of Units": "304", "% of Unit Mix": "100%", "Size (SF)": "975", "Avg. Market Rent": "$2,037", "Avg. Market Rent PSF": "$2.09" }] }

    const container1_table4 = document.querySelector('.InvestmentHighlightTable');
    container1_table4.innerHTML = '';
    // Calculate the grid-template-columns value based on header count
    const numberOfHeaders1_table4 = page27_table4.header.length;
    const gridTemplateColumnsValue1_table4 = Array(numberOfHeaders1_table4).fill('1fr').join(' ');

    // Creating Headers from page27_table4.header
    const headerDiv1_table4 = document.createElement('div');
    headerDiv1_table4.className = 'InvestmentHighlightHeader';
    headerDiv1_table4.style.gridTemplateColumns = gridTemplateColumnsValue1_table4;

    for (let header of page27_table4.header) {
        const p = document.createElement('p');
        p.textContent = header.label;
        p.className = 'HEADERTEXT';
        headerDiv1_table4.appendChild(p);
    }

    container1_table4.appendChild(headerDiv1_table4);

    // Creating Rows from page27.rows
    for (let rowData of page27_table4.rows) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'InvestmentHighlightRows';
        rowDiv.style.gridTemplateColumns = gridTemplateColumnsValue1_table4;

        for (let header of page27_table4.header) {
            const p = document.createElement('p');
            p.textContent = rowData[header.id] || ''; // Use the header id to fetch the corresponding data from the row
            p.className = 'ROWTEXT';
            rowDiv.appendChild(p);
        }

        container1_table4.appendChild(rowDiv);
    }










    // rent compareable
    // let page6RentCompareableTable = ProjectData.allData?.projectBudget
    let page6RentCompareableTable = ProjectData.allData?.rentcomparable

    // let page6RentCompareableTable = { "header": [{ "id": "Unit Type", "label": "Unit Type" }, { "id": "# of Units", "label": "# of Units" }, { "id": "% of Unit Mix", "label": "% of Unit Mix" }, { "id": "Size (SF)", "label": "Size (SF)" }, { "id": "Avg. Market Rent", "label": "Avg. Market Rent" }, { "id": "Avg. Market Rent PSF", "label": "Avg. Market Rent PSF" }], "rows": [{ "Unit Type": " A1 (1 Bed / 1 Bath) ", "# of Units": "31", "% of Unit Mix": "10%", "Size (SF)": "627", "Avg. Market Rent": "$1,677", "Avg. Market Rent PSF": "$2.67" }, { "Unit Type": " A2 (1 Bed / 1 Bath) ", "# of Units": "19", "% of Unit Mix": "6%", "Size (SF)": "691", "Avg. Market Rent": "$1,720", "Avg. Market Rent PSF": "$2.49" }, { "Unit Type": " A3 (1 Bed / 1 Bath) ", "# of Units": "16", "% of Unit Mix": "5%", "Size (SF)": "750", "Avg. Market Rent": "$1,782", "Avg. Market Rent PSF": "$2.38" }, { "Unit Type": " B1 (2 Bed / 1 Bath) ", "# of Units": "27", "% of Unit Mix": "9%", "Size (SF)": "893", "Avg. Market Rent": "$2,007", "Avg. Market Rent PSF": "$2.25" }, { "Unit Type": " B2 (2 Bed / 2 Bath) ", "# of Units": "5", "% of Unit Mix": "2%", "Size (SF)": "917", "Avg. Market Rent": "$2,059", "Avg. Market Rent PSF": "$2.25" }, { "Unit Type": " B3 (2 Bed / 2 Bath) ", "# of Units": "42", "% of Unit Mix": "14%", "Size (SF)": "932", "Avg. Market Rent": "$2,028", "Avg. Market Rent PSF": "$2.18" }, { "Unit Type": " B4 (2 Bed / 2 Bath) ", "# of Units": "82", "% of Unit Mix": "27%", "Size (SF)": "1,072", "Avg. Market Rent": "$2,090", "Avg. Market Rent PSF": "$1.95" }, { "Unit Type": " B5 (2 Bed / 2 Bath) ", "# of Units": "54", "% of Unit Mix": "18%", "Size (SF)": "1,111", "Avg. Market Rent": "$2,111", "Avg. Market Rent PSF": "$1.90" }, { "Unit Type": " C1 (3 Bed / 2 Bath) ", "# of Units": "28", "% of Unit Mix": "9%", "Size (SF)": "1,294", "Avg. Market Rent": "$2,540", "Avg. Market Rent PSF": "$1.96" }, { "Unit Type": "Total / Average", "# of Units": "304", "% of Unit Mix": "100%", "Size (SF)": "975", "Avg. Market Rent": "$2,037", "Avg. Market Rent PSF": "$2.09" }] }

    const containerCompareable = document.querySelector('.frame-1000002548-YvC');
    containerCompareable.innerHTML = '';
    // Calculate the grid-template-columns value based on header count
    const numberOfHeaders1_compareable = page6RentCompareableTable?.header?.length - 1; // Subtract 1 for the first column
    const gridTemplateColumnsValue1_compareable = '250px ' + Array(numberOfHeaders1_compareable).fill('1fr').join(' ');


    // Creating Headers from page6RentCompareableTable.header
    const headerDiv1_compareable = document.createElement('div');
    headerDiv1_compareable.className = 'RentCompareableHeader';
    headerDiv1_compareable.style.gridTemplateColumns = gridTemplateColumnsValue1_compareable;


    for (let header of page6RentCompareableTable?.header) {
        const p = document.createElement('p');
        p.textContent = header.label;
        p.className = 'HEADERTEXT';
        headerDiv1_compareable.appendChild(p);
    }

    containerCompareable.appendChild(headerDiv1_compareable);

    // Creating Rows from page27.rows
    for (let rowData of page6RentCompareableTable.rows) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'RentCompareableRows';
        rowDiv.style.gridTemplateColumns = gridTemplateColumnsValue1_compareable;

        for (let header of page6RentCompareableTable.header) {
            const p = document.createElement('p');
            p.textContent = rowData[header.id] || ''; // Use the header id to fetch the corresponding data from the row
            p.className = 'ROWTEXT';
            rowDiv.appendChild(p);
        }

        containerCompareable.appendChild(rowDiv);
    }




    // var xValues = page6RentCompareableTable.rows.map(function (row) {
    //     return row.Property;
    // });
    // var yValues = page6RentCompareableTable.rows.map(function (item) {
    //     // Remove '$' and commas and convert to a number
    //     return parseFloat(item['Avg. Market Rent'].replace(/[^\d.]/g, ''));
    // });


    // // var xValues = ["The Watson", "Amelia Westshore", "Aqola South Tampa", "The Pointe On Westshore", "Town Westshore", "Cortland Westshore", "Bainbridge At Westshore Marina"];
    // // var yValues = [2047, 2298, 2342, 2438, 2455, 2699, 4000];
    // var barColors = ["#cccccc", "#000000", "#cccccc", "#cccccc", "#cccccc", "#cccccc", "#cccccc"];

    // var highestValue = Math.max(...yValues);
    // var riverStationValue = yValues[xValues.indexOf("Riverside Station")];
    // var difference = highestValue - riverStationValue;
    // new Chart("myChart", {
    //     type: "bar",
    //     data: {
    //         labels: xValues,
    //         datasets: [{
    //             backgroundColor: barColors,
    //             data: yValues,
    //             barThickness: 28.677
    //         }]
    //     },
    //     options: {
    //         layout: {
    //             // padding: {
    //             //     top: 50  // Adjust this if necessary to give more space at the top
    //             // }
    //         },
    //         animation: {
    //             onComplete: function () {
    //                 console.log("Animation Complete function called");
    //                 var ctx = this.chart.ctx;
    //                 ctx.textAlign = 'center';
    //                 ctx.fillStyle = "#FF5733";
    //                 ctx.textBaseline = 'top';
    //                 ctx.fillText("Rent Gap: River Station vs Highest Value: $" + difference, this.chart.width / 2, 5);  // adjust y-position for the top of the chart
    //             }
    //         },
    //         plugins: {
    //             datalabels: {
    //                 color: 'black',
    //                 anchor: 'end',
    //                 align: 'top',
    //                 formatter: (value, context) => {
    //                     return "$" + value;
    //                 }
    //             }
    //         },
    //         scales: {
    //             xAxes: [{
    //                 ticks: {
    //                     fontColor: 'black'
    //                 }
    //             }],
    //             yAxes: [{
    //                 ticks: {
    //                     beginAtZero: true,
    //                     fontColor: 'black',
    //                     callback: function (value) {
    //                         return '$' + value;
    //                     }
    //                 }
    //             }]
    //         },
    //         legend: {
    //             display: false
    //         }
    //     }
    // });


    let apartmentsData = ProjectData.allData?.RentCompareGraph

    // var apartmentsData = {
    //     "The Watson": { "rent": 1201, "color": "#cccccc" },
    //     "Amelia Westshore": { "rent": 3201, "color": "#000000" },
    //     "Aqola South Tampa": { "rent": 2001, "color": "#cccccc" },
    //     "The Pointe On Westshore": { "rent": 9001, "color": "#cccccc" },
    //     "Town Westshore": { "rent": 8001, "color": "#cccccc" },
    //     "Cortland Westshore": { "rent": 4001, "color": "#cccccc" },
    //     "Bainbridge At Westshore Marina": { "rent": 5001, "color": "#cccccc" }
    // };



    // var apartmentsData = {
    //     "Bell Stoneridge"
    //         :
    //         { rent: "2230", color: '#CCCCCC' },
    //     "Riverside Station"
    //         :
    //         { rent: "2037", color: '#000000' },
    //     "Stone Pointe"
    //         :
    //         { rent: "2098", color: '#CCCCCC' },
    //     "The Enclave at Potomac Club"
    //         :
    //         { rent: "2250", color: '#CCCCCC' },
    //     "The Flats at Neabsco"
    //         :
    //         { rent: "2265", color: '#CCCCCC' },
    //     "The Sutton"
    //         :
    //         { rent: "2149", color: '#CCCCCC' },
    // }

    // Assuming all rent values are strings and not including any decimal places
    // Object.keys(apartmentsData).forEach(key => {
    //     apartmentsData[key].rent = parseInt(apartmentsData[key].rent, 10); // Convert rent from string to number
    // });
    // var sortedKeys = Object.keys(apartmentsData).sort((a, b) => {
    //     return parseInt(apartmentsData[a].rent, 10) - parseInt(apartmentsData[b].rent, 10);
    // });







    // Sort the keys based on the rent
    var sortedKeys = Object.keys(apartmentsData).sort((a, b) => {
        return apartmentsData[a].rent - apartmentsData[b].rent;
    });


    // Create a new sorted object
    var sortedApartmentsData = {};
    sortedKeys.forEach((key) => {
        sortedApartmentsData[key] = apartmentsData[key];
    });

    // Now sortedApartmentsData contains the properties in sorted order by rent
    apartmentsData = sortedApartmentsData;

    // Log the sorted object (or use it as needed)
    console.log(apartmentsData);
    var xValuesFromObject = Object.keys(apartmentsData);
    var yValuesFromObject = xValuesFromObject.map(x => apartmentsData[x].rent);
    var barColorsFromObject = xValuesFromObject.map(x => apartmentsData[x].color);

    function wrapText(context, text, maxWidth) {
        var words = text.split(' ');
        var newLine = words[0];
        var lines = [];
        for(var i = 1; i < words.length; ++i) {
          if (context.measureText(newLine + " " + words[i]).width < maxWidth) {
            newLine += " " + words[i];
          } else {
            lines.push(newLine);
            newLine = words[i];
          }
        }
        lines.push(newLine);
        return lines;
      }
      
      var canvas = document.getElementById('myChart');
      var ctx = canvas.getContext('2d');
      var maxWidth = 50; 

      var wrappedLabels = xValuesFromObject.map(function(label) {
        return wrapText(ctx, label, maxWidth).join('\n');
      });



    new Chart("myChart", {
        type: "bar",
        data: {
            labels: wrappedLabels,
            datasets: [{
                backgroundColor: barColorsFromObject,
                data: yValuesFromObject,
                barThickness: 28.677
            }]
        },
        options: {
            layout: {
                padding: {
                    top: 30
                }
            },
            // ...

            animation: {
                onComplete: function () {
                    var ctx = this.chart.ctx;
                    var lineOffset = 40; // This will move the line up by 40 pixels
                    var textOffset = 25; // This will adjust the position of the text above the line

                    // 1. Identify the bars you want to connect
                    var highestIndex = yValuesFromObject.indexOf(Math.max(...yValuesFromObject));
                    var blackColorIndex = barColorsFromObject.indexOf("#000000");

                    if (highestIndex === -1 || blackColorIndex === -1) return; // Ensure both indices were found

                    var highestBar = this.data.datasets[0]._meta[Object.keys(this.data.datasets[0]._meta)[0]].data[highestIndex]._model;
                    var blackColorBar = this.data.datasets[0]._meta[Object.keys(this.data.datasets[0]._meta)[0]].data[blackColorIndex]._model;

                    var offset = 20;
                    ctx.beginPath();
                    ctx.moveTo(highestBar.x, highestBar.y - 20); // Start at the top of the highest bar
                    ctx.lineTo(highestBar.x, highestBar.y - lineOffset); // Draw down to where the horizontal line is
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "#000000"; // Color for the line, change as needed
                    ctx.stroke();

                    // 2. Draw a horizontal line from the highest bar to the black-colored bar
                    ctx.beginPath();
                    ctx.moveTo(highestBar.x, highestBar.y - lineOffset); // Start from where the vertical line ended
                    ctx.lineTo(blackColorBar.x, highestBar.y - lineOffset); // Continue to the black bar
                    ctx.lineTo(blackColorBar.x, blackColorBar.y - offset); // And then down to the black bar's top
                    ctx.stroke();

                    // Display the difference value
                    var difference = Math.abs(yValuesFromObject[highestIndex] - yValuesFromObject[blackColorIndex]);
                    var differenceText = "$" + difference;
                    var textWidth = ctx.measureText(differenceText).width + 34;
                    var textHeight = 20;
                    var rectangleWidth = 104; // Use 104 as the rounded value of 103.954
                    // Draw the filled rectangle background for the label
                    ctx.fillStyle = "#EDE8E6"; // Background color for the label
                    ctx.fillRect(
                        (highestBar.x + blackColorBar.x) / 2 - rectangleWidth / 2,
                        highestBar.y - lineOffset - textHeight / 2 - 5,
                        rectangleWidth,
                        textHeight
                    );
                    // Display the text on the rectangle
                    ctx.textAlign = 'center';
                    ctx.fillStyle = "#0D0D0D";
                    ctx.textBaseline = 'middle';
                    ctx.fillText(differenceText, (highestBar.x + blackColorBar.x) / 2, highestBar.y - lineOffset - 5);

                    // Display the values on top of each bar
                    ctx.fillStyle = "#000000";
                    ctx.textBaseline = 'bottom';
                    this.data.datasets[0].data.forEach((value, index) => {
                        ctx.fillText("$" + value, this.data.datasets[0]._meta[Object.keys(this.data.datasets[0]._meta)[0]].data[index]._model.x, this.data.datasets[0]._meta[Object.keys(this.data.datasets[0]._meta)[0]].data[index]._model.y - 5);
                    });
                }
            }
            ,


            // ...

            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: 'black',// Should set x-axis tick labels to black in Chart.js 2.9.4
                        autoSkip: false, // Turn off auto-skipping to ensure every label is shown
                        callback: function(value, index, values) {
                          // Render each line on a separate row
                          return value.split("\n");
                        }
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: 'black', // Should set y-axis tick labels to black in Chart.js 2.9.4
                        beginAtZero: true,
                        callback: function (value, index, values) {
                            return '$' + value; // Adds a dollar sign before y-axis tick values
                        }
                    }
                }]
            },


            legend: {
                display: false
            },
            plugins: {
                datalabels: {
                    display: false
                }
            }
        }
    });
















    var map = new L.Map('leaflet', {
        layers: [
            new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            })
        ],
        center: [38.824561, -77.113268], // Isko update kiya gaya hai
        zoom: 13 // Zoom level ko adjust kiya gaya hai
    });

    var madrid = L.marker([40.472, -3.561]);
    var lyon = L.marker([45.728, 4.945]);
    var yourLocation = L.marker([38.824561, -77.113268]); // Yeh naya marker hai

    map.addLayer(madrid).addLayer(lyon).addLayer(yourLocation); // Yahaan yourLocation ko bhi add kiya gaya hai

    var airports = {
        label: 'Airports',
        children: [
            {
                label: '<span id="madrid">Madrid</span>',
                layer: madrid
            },
            {
                label: '<span id="lyon">Lyon</span>',
                layer: lyon
            }
        ]
    };

    var dic = { madrid: madrid, lyon: lyon, yourLocation: yourLocation };
    Object.keys(dic).forEach(function (item) {
        document.getElementById(item)?.addEventListener('dblclick', function (ev) {
            map.flyTo(dic[item]._latlng, 10);
        });
    });












};





// Listener for the custom event
window.addEventListener('dataInjected', function () {

    console.log("dataInjected event fired");
    if (window.myInjectedData) {
        console.log("dataInjected ejaz");
        const ProjectData = window.myInjectedData;
        PassProjectData(ProjectData);
    }
});

