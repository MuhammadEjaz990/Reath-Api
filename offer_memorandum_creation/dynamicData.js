

const PassProjectData = (ProjectData) => {


  // inteior amenities ----------------------------------------------------------- 
  const inteiorAmenities = ProjectData.allData.page19
  // const inteiorAmenities = [
  //   "Lorem ipsum inteiorAmenities",
  //   "Lorem ipsum inteiorAmenities",
  //   "Lorem ipsum inteiorAmenities",
  //   "Lorem ipsum inteiorAmenities",
  //   "Lorem ipsum inteiorAmenities",
  //   "Lorem ipsum inteiorAmenities",
  //   "Lorem ipsum inteiorAmenities",
  //   "Lorem ipsum inteiorAmenities",
  //   "Lorem ipsum inteiorAmenities",
  //   "Lorem ipsum inteiorAmenities",
  //   "Lorem ipsum inteiorAmenities",
  //   "Lorem ipsum inteiorAmenities",
  //   "Lorem ipsum inteiorAmenities",
  //   "Lorem ipsum inteiorAmenities",
  //   "Lorem ipsum inteiorAmenities",
  //   "Lorem ipsum inteiorAmenities",
  // ];

  const InteriorAmenitiesDiv = document.querySelector('.InteriorAmenitiesDiv');

  inteiorAmenities.forEach(text => {
    const pElement = document.createElement('p');
    pElement.className = 'interioramenitiesText';
    pElement.textContent = text;
    InteriorAmenitiesDiv.appendChild(pElement);
  });

  // community amenities ----------------------------------------------------------- 
  const CommunityAmenities = ProjectData.allData.page18
  // const CommunityAmenities = [
  //   "Lorem ipsum community",
  //   "Lorem ipsum community",
  //   "Lorem ipsum community",
  //   "Lorem ipsum community",
  //   "Lorem ipsum community",
  //   "Lorem ipsum community",
  //   "Lorem ipsum community",
  //   "Lorem ipsum community",
  //   "Lorem ipsum community",
  //   "Lorem ipsum community",
  //   "Lorem ipsum community",
  //   "Lorem ipsum community",
  //   "Lorem ipsum community",
  // ];

  const CommunitiesAmenitiesDiv = document.querySelector('.CommunitiesAmenitiesDiv');

  CommunityAmenities.forEach(text => {
    const pElement = document.createElement('p');
    pElement.className = 'communityamenitiesText';
    pElement.textContent = text;
    CommunitiesAmenitiesDiv.appendChild(pElement);
  });

  // highLIghts ----------------------------------------------------------------------------------------?
  // const highLights =ProjectData.allData
  // const highLights = [
  //   "Lorem ipsum dolor sit amet con nostrum saepe labore odit?",
  //   "Lorem ipsum dolor sit amet con nostrum saepe labore odit?",
  //   "Lorem ipsum dolor sit amet con nostrum saepe labore odit?",
  //   "Lorem ipsum dolor sit amet con nostrum saepe labore odit?",
  //   "Lorem ipsum dolor sit amet con nostrum saepe labore odit?",
  //   "Lorem ipsum dolor sit amet con nostrum saepe labore odit?",
  //   "Lorem ipsum dolor sit amet con nostrum saepe labore odit?",
  //   "Lorem ipsum dolor sit amet con nostrum saepe labore odit?",
  // ];

  // const divElement = document.querySelector('.highLightDiv');

  // highLights.forEach(text => {
  //   const pElement = document.createElement('p');
  //   pElement.className = 'highlighttext';
  //   pElement.textContent = text;
  //   divElement.appendChild(pElement);
  // });

  // stake HOlders---------------------------------------------------------------------
  const stackholders = ProjectData.allData.page3?.stakeholder_info
  // const stackholders = [
  //   {
  //     NAME: "JOSEPH SMOLEN",
  //     TITLE: "Managing Director",
  //     PHONE: "415 228 2883",
  //     EMAIL: "jsmolen@eastdilsecured.com",
  //     DRE: "CA DRE #01423874"
  //   },
  //   {
  //     NAME: "JOSEPH SMOLEN",
  //     TITLE: "Managing Director",
  //     PHONE: "415 228 2883",
  //     EMAIL: "jsmolen@eastdilsecured.com",
  //     DRE: "CA DRE #01423874"
  //   },
  //   {
  //     NAME: "JOSEPH SMOLEN",
  //     TITLE: "Managing Director",
  //     PHONE: "415 228 2883",
  //     EMAIL: "jsmolen@eastdilsecured.com",
  //     DRE: "CA DRE #01423874"
  //   }
  //   ,
  //   {
  //     NAME: "JOSEPH SMOLEN",
  //     TITLE: "Managing Director",
  //     PHONE: "415 228 2883",
  //     EMAIL: "jsmolen@eastdilsecured.com",
  //     DRE: "CA DRE #01423874"
  //   }
  //   ,
  //   {
  //     NAME: "JOSEPH SMOLEN",
  //     TITLE: "Managing Director",
  //     PHONE: "415 228 2883",
  //     EMAIL: "jsmolen@eastdilsecured.com",
  //     DRE: "CA DRE #01423874"
  //   }

  // ];

  const stackholdersContainer = document.getElementById('stackholdersContainer');

  stackholders?.forEach(stackholder => {
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('Stackholderdiv');

    const nameP = document.createElement('p');
    nameP.classList.add('text-13');
    nameP.textContent = stackholder.NAME;
    innerDiv.appendChild(nameP);

    const titleP = document.createElement('p');
    titleP.classList.add('fw700', 'text-14');
    titleP.textContent = stackholder.TITLE;
    innerDiv.appendChild(titleP);

    const phoneP = document.createElement('p');
    phoneP.classList.add('normalText14');
    phoneP.textContent = stackholder.PHONE;
    innerDiv.appendChild(phoneP);

    const emailP = document.createElement('p');
    emailP.classList.add('normalText15');
    emailP.textContent = stackholder.EMAIL;
    innerDiv.appendChild(emailP);

    const dreP = document.createElement('p');
    dreP.classList.add('normalText16');
    dreP.textContent = stackholder.DRE;
    innerDiv.appendChild(dreP);

    stackholdersContainer.appendChild(innerDiv);
  });





  // page-9 lower part---------------------------------------------------------------------
  // const page9 = ProjectData.allData.page9.lowerPart
  const page9 = {
    "Need": "content",
    "Need1": "content ",
    "Need2": "content",
    "Need3": "content",
    "Need4": "content",
    "Need5": "content",
  }



  const col71 = document.querySelector(".col-71");

  for (let key in page9) {
    if (page9.hasOwnProperty(key)) {
      const editRow = document.createElement('div');
      editRow.classList.add('row-50');

      const keyElement = document.createElement('p');
      keyElement.classList.add('text-69');
      keyElement.innerText = key;

      const valueElement = document.createElement('p');
      valueElement.classList.add('text-70');
      valueElement.innerText = page9[key];

      editRow.appendChild(keyElement);
      editRow.appendChild(valueElement);

      col71.appendChild(editRow);
    }
  }














  // page 30 lower part ---------------------------------------------------------------------
  // const LowerPart = ProjectData.allData.page30?.LowerPart
  const LowerPart = [
    {
      Heading: "Need ",
      Description: "Need Content",
      Loca: "Need Content",

    },
    {
      Heading: "Need ",
      Description: "Need Content",
      Loca: "Need Content",

    },
    {
      Heading: "Need ",
      Description: "Need Content",
      Loca: "Need Content",

    },
    {
      Heading: "Need ",
      Description: "Need Content",
      Loca: "Need Content",

    },



  ];

  const LowerPartDiv = document.getElementById('LowerPartDiv');




  LowerPart?.forEach(stackholder => {
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('col-39');

    const nameP = document.createElement('p');
    nameP.classList.add('text-344');
    nameP.textContent = stackholder.Heading;
    innerDiv.appendChild(nameP);

    const titleP = document.createElement('p');
    titleP.classList.add('text-345');
    titleP.textContent = stackholder.Description;
    innerDiv.appendChild(titleP);

    const phoneP = document.createElement('p');
    phoneP.classList.add('dice');
    phoneP.textContent = stackholder.Loca;
    innerDiv.appendChild(phoneP);



    LowerPartDiv.appendChild(innerDiv);
  });
























  // physical summary---------------------------------------------------------------------
  const physicalsummary = ProjectData.allData.page17
  // const physicalsummary = {
  //   'Field1': Math.random() * 100,
  //   'Field2': Math.random() * 100,
  //   'Field3': Math.random() * 100,
  //   'Field4': Math.random() * 100,
  //   'Field5': Math.random() * 100,
  //   'Field6': Math.random() * 100,
  //   'Field7': Math.random() * 100,
  //   'Field8': Math.random() * 100,
  //   'Field9': Math.random() * 100,
  //   'Field10': Math.random() * 100,
  //   'Field11': Math.random() * 100,
  //   'Field12': Math.random() * 100,
  //   'Field13': Math.random() * 100,
  //   'Field14': Math.random() * 100,
  //   'Field15': Math.random() * 100,
  //   'Field16': Math.random() * 100,
  //   'Field17': Math.random() * 100,
  //   'Field18': Math.random() * 100,
  //   'Field19': Math.random() * 100,
  //   'Field20': Math.random() * 100,
  //   'Field21': Math.random() * 100,
  //   'Field22': Math.random() * 100,
  //   'Field23': Math.random() * 100,
  //   'Field24': Math.random() * 100,
  //   'Field25': Math.random() * 100,
  // };

  const physicalsummarydiv = document.querySelector(".physicalsummarydiv");

  for (let key in physicalsummary) {
    if (physicalsummary.hasOwnProperty(key)) {
      const editRow = document.createElement('div');
      editRow.classList.add('physicalsummaryitem');

      const keyElement = document.createElement('p');
      keyElement.classList.add('physicalsummaryText');
      keyElement.innerText = key;

      const valueElement = document.createElement('p');
      valueElement.classList.add('physicalsummaryValue');
      valueElement.innerText = physicalsummary[key];

      editRow.appendChild(keyElement);
      editRow.appendChild(valueElement);

      physicalsummarydiv.appendChild(editRow);
    }
  }















  // parking summary---------------------------------------------------------------------
  // const ParkingSummary = ProjectData.allData.page17
  const ParkingSummary = {
    "need": "content",
    "need1": "content",
    "need2": "content",
    "need3": "content",
    "need4": "content",
    "need5": "content",
    "need6": "content",
    "need7": "content",


  }




  const belowphysicalsummary = document.querySelector(".belowphysicalsummary");

  for (let key in ParkingSummary) {
    if (ParkingSummary.hasOwnProperty(key)) {
      const editRow = document.createElement('div');
      editRow.classList.add('belowconlu');

      const keyElement = document.createElement('p');
      keyElement.classList.add('belowtextvalue');
      keyElement.innerText = key;

      const valueElement = document.createElement('p');
      valueElement.classList.add('belowtextheading');
      valueElement.innerText = ParkingSummary[key];

      editRow.appendChild(keyElement);
      editRow.appendChild(valueElement);

      belowphysicalsummary.appendChild(editRow);
    }
  }













  // property overview---------------------------------------------------------------------
  const page5 = ProjectData.allData.page5.property_overview
  // const page5 = {
  //   "Address": "N/A",
  //   "Location": " Riverside Station is located in Virginia.",
  //   "Year Built": "N/A",
  //   "Units": "304",
  //   "Avg. Unit Size": "N/A",
  //   "Residential": "100",
  //   "Stories": "N/A",
  //   "Parking Spaces": "N/A",
  //   "Ground Lease Term": "N/A"
  // }

  const propertyOverDiv = document.querySelector(".propertyOverDiv");

  for (let key in page5) {
    if (page5.hasOwnProperty(key)) {
      const editRow = document.createElement('div');
      editRow.classList.add('editRow');

      const keyElement = document.createElement('p');
      keyElement.classList.add('textEdit');
      keyElement.innerText = key;

      const valueElement = document.createElement('p');
      valueElement.classList.add('textEditsecond');
      valueElement.innerText = page5[key];

      editRow.appendChild(keyElement);
      editRow.appendChild(valueElement);

      propertyOverDiv.appendChild(editRow);
    }
  }

  // employe table -------------------------------------------------------------------------------------------
  let page11 = ProjectData.allData.page11.table

  // let page11 = { "header": [{ "id": "Unit Type", "label": "Unit Type" }, { "id": "# of Units", "label": "# of Units" }, { "id": "% of Unit Mix", "label": "% of Unit Mix" }, { "id": "Size (SF)", "label": "Size (SF)" }, { "id": "Avg. Market Rent", "label": "Avg. Market Rent" }, { "id": "Avg. Market Rent PSF", "label": "Avg. Market Rent PSF" }], "rows": [{ "Unit Type": " A1 (1 Bed / 1 Bath) ", "# of Units": "31", "% of Unit Mix": "10%", "Size (SF)": "627", "Avg. Market Rent": "$1,677", "Avg. Market Rent PSF": "$2.67" }, { "Unit Type": " A2 (1 Bed / 1 Bath) ", "# of Units": "19", "% of Unit Mix": "6%", "Size (SF)": "691", "Avg. Market Rent": "$1,720", "Avg. Market Rent PSF": "$2.49" }, { "Unit Type": " A3 (1 Bed / 1 Bath) ", "# of Units": "16", "% of Unit Mix": "5%", "Size (SF)": "750", "Avg. Market Rent": "$1,782", "Avg. Market Rent PSF": "$2.38" }, { "Unit Type": " B1 (2 Bed / 1 Bath) ", "# of Units": "27", "% of Unit Mix": "9%", "Size (SF)": "893", "Avg. Market Rent": "$2,007", "Avg. Market Rent PSF": "$2.25" }, { "Unit Type": " B2 (2 Bed / 2 Bath) ", "# of Units": "5", "% of Unit Mix": "2%", "Size (SF)": "917", "Avg. Market Rent": "$2,059", "Avg. Market Rent PSF": "$2.25" }, { "Unit Type": " B3 (2 Bed / 2 Bath) ", "# of Units": "42", "% of Unit Mix": "14%", "Size (SF)": "932", "Avg. Market Rent": "$2,028", "Avg. Market Rent PSF": "$2.18" }, { "Unit Type": " B4 (2 Bed / 2 Bath) ", "# of Units": "82", "% of Unit Mix": "27%", "Size (SF)": "1,072", "Avg. Market Rent": "$2,090", "Avg. Market Rent PSF": "$1.95" }, { "Unit Type": " B5 (2 Bed / 2 Bath) ", "# of Units": "54", "% of Unit Mix": "18%", "Size (SF)": "1,111", "Avg. Market Rent": "$2,111", "Avg. Market Rent PSF": "$1.90" }, { "Unit Type": " C1 (3 Bed / 2 Bath) ", "# of Units": "28", "% of Unit Mix": "9%", "Size (SF)": "1,294", "Avg. Market Rent": "$2,540", "Avg. Market Rent PSF": "$1.96" }, { "Unit Type": "Total / Average", "# of Units": "304", "% of Unit Mix": "100%", "Size (SF)": "975", "Avg. Market Rent": "$2,037", "Avg. Market Rent PSF": "$2.09" }] }

  const container = document.querySelector('.col-55');
  container.innerHTML = '';
  // Calculate the grid-template-columns value based on header count
  const numberOfHeaders = page11.header.length;
  const gridTemplateColumnsValue = Array(numberOfHeaders).fill('1fr').join(' ');

  // Creating Headers from page11.header
  const headerDiv = document.createElement('div');
  headerDiv.className = 'flexme';
  headerDiv.style.gridTemplateColumns = gridTemplateColumnsValue;

  for (let header of page11.header) {
    const p = document.createElement('p');
    p.textContent = header.label;
    p.className = 'rank';
    headerDiv.appendChild(p);
  }

  container.appendChild(headerDiv);

  // Creating Rows from page11.rows
  for (let rowData of page11.rows) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    rowDiv.style.gridTemplateColumns = gridTemplateColumnsValue;

    for (let header of page11.header) {
      const p = document.createElement('p');
      p.textContent = rowData[header.id] || ''; // Use the header id to fetch the corresponding data from the row
      p.className = 'text-94';
      rowDiv.appendChild(p);
    }

    container.appendChild(rowDiv);
  }







  // unitMix -------------------------------------------------------------------------------------------


  // page27_table1 
  let page27_table1 = ProjectData.allData.page27.tables.table1

  // let page27_table1 = { "header": [{ "id": "Unit Type", "label": "Unit Type" }, { "id": "# of Units", "label": "# of Units" }, { "id": "% of Unit Mix", "label": "% of Unit Mix" }, { "id": "Size (SF)", "label": "Size (SF)" }, { "id": "Avg. Market Rent", "label": "Avg. Market Rent" }, { "id": "Avg. Market Rent PSF", "label": "Avg. Market Rent PSF" }], "rows": [{ "Unit Type": " A1 (1 Bed / 1 Bath) ", "# of Units": "31", "% of Unit Mix": "10%", "Size (SF)": "627", "Avg. Market Rent": "$1,677", "Avg. Market Rent PSF": "$2.67" }, { "Unit Type": " A2 (1 Bed / 1 Bath) ", "# of Units": "19", "% of Unit Mix": "6%", "Size (SF)": "691", "Avg. Market Rent": "$1,720", "Avg. Market Rent PSF": "$2.49" }, { "Unit Type": " A3 (1 Bed / 1 Bath) ", "# of Units": "16", "% of Unit Mix": "5%", "Size (SF)": "750", "Avg. Market Rent": "$1,782", "Avg. Market Rent PSF": "$2.38" }, { "Unit Type": " B1 (2 Bed / 1 Bath) ", "# of Units": "27", "% of Unit Mix": "9%", "Size (SF)": "893", "Avg. Market Rent": "$2,007", "Avg. Market Rent PSF": "$2.25" }, { "Unit Type": " B2 (2 Bed / 2 Bath) ", "# of Units": "5", "% of Unit Mix": "2%", "Size (SF)": "917", "Avg. Market Rent": "$2,059", "Avg. Market Rent PSF": "$2.25" }, { "Unit Type": " B3 (2 Bed / 2 Bath) ", "# of Units": "42", "% of Unit Mix": "14%", "Size (SF)": "932", "Avg. Market Rent": "$2,028", "Avg. Market Rent PSF": "$2.18" }, { "Unit Type": " B4 (2 Bed / 2 Bath) ", "# of Units": "82", "% of Unit Mix": "27%", "Size (SF)": "1,072", "Avg. Market Rent": "$2,090", "Avg. Market Rent PSF": "$1.95" }, { "Unit Type": " B5 (2 Bed / 2 Bath) ", "# of Units": "54", "% of Unit Mix": "18%", "Size (SF)": "1,111", "Avg. Market Rent": "$2,111", "Avg. Market Rent PSF": "$1.90" }, { "Unit Type": " C1 (3 Bed / 2 Bath) ", "# of Units": "28", "% of Unit Mix": "9%", "Size (SF)": "1,294", "Avg. Market Rent": "$2,540", "Avg. Market Rent PSF": "$1.96" }, { "Unit Type": "Total / Average", "# of Units": "304", "% of Unit Mix": "100%", "Size (SF)": "975", "Avg. Market Rent": "$2,037", "Avg. Market Rent PSF": "$2.09" }] }

  const container1 = document.querySelector('.col-56');
  container1.innerHTML = '';
  // Calculate the grid-template-columns value based on header count
  const numberOfHeaders1 = page27_table1.header.length;
  const gridTemplateColumnsValue1 = Array(numberOfHeaders1).fill('1fr').join(' ');

  // Creating Headers from page27_table1.header
  const headerDiv1 = document.createElement('div');
  headerDiv1.className = 'flexme';
  headerDiv1.style.gridTemplateColumns = gridTemplateColumnsValue1;

  for (let header of page27_table1.header) {
    const p = document.createElement('p');
    p.textContent = header.label;
    p.className = 'rank';
    headerDiv1.appendChild(p);
  }

  container1.appendChild(headerDiv1);

  // Creating Rows from page27.rows
  for (let rowData of page27_table1.rows) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    rowDiv.style.gridTemplateColumns = gridTemplateColumnsValue1;

    for (let header of page27_table1.header) {
      const p = document.createElement('p');
      p.textContent = rowData[header.id] || ''; // Use the header id to fetch the corresponding data from the row
      p.className = 'text-94';
      rowDiv.appendChild(p);
    }

    container1.appendChild(rowDiv);
  }








  // unitMix -------------------------------------------------------------------------------------------


  // page27_table2 
  let page27_table2 = ProjectData.allData.page27.tables.table2
  // let page27_table2 = { "header": [{ "id": "Unit Type", "label": "Unit Type" }, { "id": "# of Units", "label": "# of Units" }, { "id": "% of Unit Mix", "label": "% of Unit Mix" }, { "id": "Size (SF)", "label": "Size (SF)" }, { "id": "Avg. Market Rent", "label": "Avg. Market Rent" }, { "id": "Avg. Market Rent PSF", "label": "Avg. Market Rent PSF" }], "rows": [{ "Unit Type": " A1 (1 Bed / 1 Bath) ", "# of Units": "31", "% of Unit Mix": "10%", "Size (SF)": "627", "Avg. Market Rent": "$1,677", "Avg. Market Rent PSF": "$2.67" }, { "Unit Type": " A2 (1 Bed / 1 Bath) ", "# of Units": "19", "% of Unit Mix": "6%", "Size (SF)": "691", "Avg. Market Rent": "$1,720", "Avg. Market Rent PSF": "$2.49" }, { "Unit Type": " A3 (1 Bed / 1 Bath) ", "# of Units": "16", "% of Unit Mix": "5%", "Size (SF)": "750", "Avg. Market Rent": "$1,782", "Avg. Market Rent PSF": "$2.38" }, { "Unit Type": " B1 (2 Bed / 1 Bath) ", "# of Units": "27", "% of Unit Mix": "9%", "Size (SF)": "893", "Avg. Market Rent": "$2,007", "Avg. Market Rent PSF": "$2.25" }, { "Unit Type": " B2 (2 Bed / 2 Bath) ", "# of Units": "5", "% of Unit Mix": "2%", "Size (SF)": "917", "Avg. Market Rent": "$2,059", "Avg. Market Rent PSF": "$2.25" }, { "Unit Type": " B3 (2 Bed / 2 Bath) ", "# of Units": "42", "% of Unit Mix": "14%", "Size (SF)": "932", "Avg. Market Rent": "$2,028", "Avg. Market Rent PSF": "$2.18" }, { "Unit Type": " B4 (2 Bed / 2 Bath) ", "# of Units": "82", "% of Unit Mix": "27%", "Size (SF)": "1,072", "Avg. Market Rent": "$2,090", "Avg. Market Rent PSF": "$1.95" }, { "Unit Type": " B5 (2 Bed / 2 Bath) ", "# of Units": "54", "% of Unit Mix": "18%", "Size (SF)": "1,111", "Avg. Market Rent": "$2,111", "Avg. Market Rent PSF": "$1.90" }, { "Unit Type": " C1 (3 Bed / 2 Bath) ", "# of Units": "28", "% of Unit Mix": "9%", "Size (SF)": "1,294", "Avg. Market Rent": "$2,540", "Avg. Market Rent PSF": "$1.96" }, { "Unit Type": "Total / Average", "# of Units": "304", "% of Unit Mix": "100%", "Size (SF)": "975", "Avg. Market Rent": "$2,037", "Avg. Market Rent PSF": "$2.09" }] }

  const container1_table2 = document.querySelector('.col-table2');
  container1_table2.innerHTML = '';
  // Calculate the grid-template-columns value based on header count
  const numberOfHeaders1_table = page27_table2.header.length;
  const gridTemplateColumnsValue1_table = Array(numberOfHeaders1_table).fill('1fr').join(' ');

  // Creating Headers from page27_table2.header
  const headerDiv1_table1 = document.createElement('div');
  headerDiv1_table1.className = 'flexme';
  headerDiv1_table1.style.gridTemplateColumns = gridTemplateColumnsValue1_table;

  for (let header of page27_table2.header) {
    const p = document.createElement('p');
    p.textContent = header.label;
    p.className = 'rank';
    headerDiv1_table1.appendChild(p);
  }

  container1_table2.appendChild(headerDiv1_table1);

  // Creating Rows from page27.rows
  for (let rowData of page27_table2.rows) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    rowDiv.style.gridTemplateColumns = gridTemplateColumnsValue1_table;

    for (let header of page27_table2.header) {
      const p = document.createElement('p');
      p.textContent = rowData[header.id] || ''; // Use the header id to fetch the corresponding data from the row
      p.className = 'text-94';
      rowDiv.appendChild(p);
    }

    container1_table2.appendChild(rowDiv);
  }



  // unitMix -------------------------------------------------------------------------------------------


  // page27_table3 
  let page27_table3 = ProjectData.allData.page27.tables.table3
  // let page27_table3 = { "header": [{ "id": "Unit Type", "label": "Unit Type" }, { "id": "# of Units", "label": "# of Units" }, { "id": "% of Unit Mix", "label": "% of Unit Mix" }, { "id": "Size (SF)", "label": "Size (SF)" }, { "id": "Avg. Market Rent", "label": "Avg. Market Rent" }, { "id": "Avg. Market Rent PSF", "label": "Avg. Market Rent PSF" }], "rows": [{ "Unit Type": " A1 (1 Bed / 1 Bath) ", "# of Units": "31", "% of Unit Mix": "10%", "Size (SF)": "627", "Avg. Market Rent": "$1,677", "Avg. Market Rent PSF": "$2.67" }, { "Unit Type": " A2 (1 Bed / 1 Bath) ", "# of Units": "19", "% of Unit Mix": "6%", "Size (SF)": "691", "Avg. Market Rent": "$1,720", "Avg. Market Rent PSF": "$2.49" }, { "Unit Type": " A3 (1 Bed / 1 Bath) ", "# of Units": "16", "% of Unit Mix": "5%", "Size (SF)": "750", "Avg. Market Rent": "$1,782", "Avg. Market Rent PSF": "$2.38" }, { "Unit Type": " B1 (2 Bed / 1 Bath) ", "# of Units": "27", "% of Unit Mix": "9%", "Size (SF)": "893", "Avg. Market Rent": "$2,007", "Avg. Market Rent PSF": "$2.25" }, { "Unit Type": " B2 (2 Bed / 2 Bath) ", "# of Units": "5", "% of Unit Mix": "2%", "Size (SF)": "917", "Avg. Market Rent": "$2,059", "Avg. Market Rent PSF": "$2.25" }, { "Unit Type": " B3 (2 Bed / 2 Bath) ", "# of Units": "42", "% of Unit Mix": "14%", "Size (SF)": "932", "Avg. Market Rent": "$2,028", "Avg. Market Rent PSF": "$2.18" }, { "Unit Type": " B4 (2 Bed / 2 Bath) ", "# of Units": "82", "% of Unit Mix": "27%", "Size (SF)": "1,072", "Avg. Market Rent": "$2,090", "Avg. Market Rent PSF": "$1.95" }, { "Unit Type": " B5 (2 Bed / 2 Bath) ", "# of Units": "54", "% of Unit Mix": "18%", "Size (SF)": "1,111", "Avg. Market Rent": "$2,111", "Avg. Market Rent PSF": "$1.90" }, { "Unit Type": " C1 (3 Bed / 2 Bath) ", "# of Units": "28", "% of Unit Mix": "9%", "Size (SF)": "1,294", "Avg. Market Rent": "$2,540", "Avg. Market Rent PSF": "$1.96" }, { "Unit Type": "Total / Average", "# of Units": "304", "% of Unit Mix": "100%", "Size (SF)": "975", "Avg. Market Rent": "$2,037", "Avg. Market Rent PSF": "$2.09" }] }

  const container1_table3 = document.querySelector('.col-table3');
  container1_table3.innerHTML = '';
  // Calculate the grid-template-columns value based on header count
  const numberOfHeaders1_table3 = page27_table3.header.length;
  const gridTemplateColumnsValue1_table3 = Array(numberOfHeaders1_table3).fill('1fr').join(' ');

  // Creating Headers from page27_table3.header
  const headerDiv1_table3 = document.createElement('div');
  headerDiv1_table3.className = 'flexme';
  headerDiv1_table3.style.gridTemplateColumns = gridTemplateColumnsValue1_table3;

  for (let header of page27_table3.header) {
    const p = document.createElement('p');
    p.textContent = header.label;
    p.className = 'rank';
    headerDiv1_table3.appendChild(p);
  }

  container1_table3.appendChild(headerDiv1_table3);

  // Creating Rows from page27.rows
  for (let rowData of page27_table3.rows) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    rowDiv.style.gridTemplateColumns = gridTemplateColumnsValue1_table3;

    for (let header of page27_table3.header) {
      const p = document.createElement('p');
      p.textContent = rowData[header.id] || ''; // Use the header id to fetch the corresponding data from the row
      p.className = 'text-94';
      rowDiv.appendChild(p);
    }

    container1_table3.appendChild(rowDiv);
  }









  // page27_table4 
  let page27_table4 = ProjectData.allData.page27.tables.table4
  // let page27_table4 = { "header": [{ "id": "Unit Type", "label": "Unit Type" }, { "id": "# of Units", "label": "# of Units" }, { "id": "% of Unit Mix", "label": "% of Unit Mix" }, { "id": "Size (SF)", "label": "Size (SF)" }, { "id": "Avg. Market Rent", "label": "Avg. Market Rent" }, { "id": "Avg. Market Rent PSF", "label": "Avg. Market Rent PSF" }], "rows": [{ "Unit Type": " A1 (1 Bed / 1 Bath) ", "# of Units": "31", "% of Unit Mix": "10%", "Size (SF)": "627", "Avg. Market Rent": "$1,677", "Avg. Market Rent PSF": "$2.67" }, { "Unit Type": " A2 (1 Bed / 1 Bath) ", "# of Units": "19", "% of Unit Mix": "6%", "Size (SF)": "691", "Avg. Market Rent": "$1,720", "Avg. Market Rent PSF": "$2.49" }, { "Unit Type": " A3 (1 Bed / 1 Bath) ", "# of Units": "16", "% of Unit Mix": "5%", "Size (SF)": "750", "Avg. Market Rent": "$1,782", "Avg. Market Rent PSF": "$2.38" }, { "Unit Type": " B1 (2 Bed / 1 Bath) ", "# of Units": "27", "% of Unit Mix": "9%", "Size (SF)": "893", "Avg. Market Rent": "$2,007", "Avg. Market Rent PSF": "$2.25" }, { "Unit Type": " B2 (2 Bed / 2 Bath) ", "# of Units": "5", "% of Unit Mix": "2%", "Size (SF)": "917", "Avg. Market Rent": "$2,059", "Avg. Market Rent PSF": "$2.25" }, { "Unit Type": " B3 (2 Bed / 2 Bath) ", "# of Units": "42", "% of Unit Mix": "14%", "Size (SF)": "932", "Avg. Market Rent": "$2,028", "Avg. Market Rent PSF": "$2.18" }, { "Unit Type": " B4 (2 Bed / 2 Bath) ", "# of Units": "82", "% of Unit Mix": "27%", "Size (SF)": "1,072", "Avg. Market Rent": "$2,090", "Avg. Market Rent PSF": "$1.95" }, { "Unit Type": " B5 (2 Bed / 2 Bath) ", "# of Units": "54", "% of Unit Mix": "18%", "Size (SF)": "1,111", "Avg. Market Rent": "$2,111", "Avg. Market Rent PSF": "$1.90" }, { "Unit Type": " C1 (3 Bed / 2 Bath) ", "# of Units": "28", "% of Unit Mix": "9%", "Size (SF)": "1,294", "Avg. Market Rent": "$2,540", "Avg. Market Rent PSF": "$1.96" }, { "Unit Type": "Total / Average", "# of Units": "304", "% of Unit Mix": "100%", "Size (SF)": "975", "Avg. Market Rent": "$2,037", "Avg. Market Rent PSF": "$2.09" }] }

  const container1_table4 = document.querySelector('.col-table3');
  container1_table4.innerHTML = '';
  // Calculate the grid-template-columns value based on header count
  const numberOfHeaders1_table4 = page27_table4.header.length;
  const gridTemplateColumnsValue1_table4 = Array(numberOfHeaders1_table4).fill('1fr').join(' ');

  // Creating Headers from page27_table4.header
  const headerDiv1_table4 = document.createElement('div');
  headerDiv1_table4.className = 'flexme';
  headerDiv1_table4.style.gridTemplateColumns = gridTemplateColumnsValue1_table4;

  for (let header of page27_table4.header) {
    const p = document.createElement('p');
    p.textContent = header.label;
    p.className = 'rank';
    headerDiv1_table4.appendChild(p);
  }

  container1_table4.appendChild(headerDiv1_table4);

  // Creating Rows from page27.rows
  for (let rowData of page27_table4.rows) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    rowDiv.style.gridTemplateColumns = gridTemplateColumnsValue1_table4;

    for (let header of page27_table4.header) {
      const p = document.createElement('p');
      p.textContent = rowData[header.id] || ''; // Use the header id to fetch the corresponding data from the row
      p.className = 'text-94';
      rowDiv.appendChild(p);
    }

    container1_table4.appendChild(rowDiv);
  }






















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

