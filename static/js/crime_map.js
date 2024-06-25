console.log("window loaded");

// // Define arrays to hold the created markers.
let drunkMarkers = [];
let lynchMarkers = [];
let bigamyMarkers = [];
let pimpMarkers = [];
let peepMarkers = [];
let riotMarkers = [];
let throwMarkers = [];
let bombMarkers = [];
let purseMarkers = [];
let policeMarkers = [];
let threatMarkers = [];
let extortionMarkers = [];
let lewdMarkers = [];



// Custom icon details for theft 
let drunkIcon = L.icon({
    iconUrl: "static/img/drunk.png",
    iconSize: [50, 50], // size of the icon
    iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
  });

// Custom icon details for lynching 
let lynchIcon = L.icon({
  iconUrl: "static/img/lynch.png",
  iconSize: [25, 25], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

// Custom icon details for bigamy 
let bigamyIcon = L.icon({
  iconUrl: "static/img/bigamy.png",
  iconSize: [50, 50], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

// Custom icon details for pimping 
let pimpIcon = L.icon({
  iconUrl: "static/img/pimp.png",  
  iconSize: [25, 25], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

// Custom icon details for peeping 
let peepIcon = L.icon({
  iconUrl: "static/img/peep.png",
  iconSize: [25, 25], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

// Custom icon details for riots 
let riotIcon = L.icon({
  iconUrl: "static/img/riot.png",
  iconSize: [25, 25], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

// Custom icon details for throwing 
let throwIcon = L.icon({
  iconUrl: "static/img/throw.png",
  iconSize: [25, 25], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

// Custom icon details for bombs 
let bombIcon = L.icon({
  iconUrl: "static/img/bomb.png",
  iconSize: [25, 25], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

// Custom icon details for purse 
let purseIcon = L.icon({
  iconUrl: "static/img/purse.png",
  iconSize: [25, 25], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

// Custom icon details for purse 
let policeIcon = L.icon({
  iconUrl: "static/img/police.png",
  iconSize: [25, 25], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

// Custom icon details for purse 
let threatIcon = L.icon({
  iconUrl: "static/img/threat.png",
  iconSize: [25, 25], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

// Custom icon details for purse 
let extortionIcon = L.icon({
  iconUrl: "static/img/extortion.png",
  iconSize: [25, 25], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

// Custom icon details for purse 
let lewdIcon = L.icon({
  iconUrl: "static/img/lewd.png",
  iconSize: [25, 25], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

  // d3.csv('static/data/Crime_Data_from_2020_to_Present.csv').then((x)=>{
    d3.csv('static/data/Crime_Data_from_2020_to_Present_20240611.csv').then((x)=>{
    // console.log(x)

    // loop through CSV to get crime location data for mapping
    for (let i = 0; i < x.length; i++) {
    
      // Leaflet will not plot ANY data if latitude and/or longitute coordinates are blank, therefore mapping only data that has coordinates
      if (x[i].LAT) {
        
        let crime = x[i];
  
        // Look in data for Drunk Roll (Crime Code 353)
        //if (crime["Crm Cd"] === "353" && crime["DATE OCC"].split(" ")[0].split(-4) === "2023") {
        if (crime["Crm Cd"] === "353") {
        // console.log(crime.LAT, crime.LON, crime.crime_bin);

          // Create marker based on lat/long
          let drunkMarker = L.marker([crime.LAT, crime.LON], {
                            
            // Use custom icon data
            icon: drunkIcon
    
          // Popup data displays type of crime committed
          }).bindPopup("<strong>Crime Desc: </strong>" + crime["Crm Cd Desc"] + 
          "<br><strong>Date: </strong>" + crime["DATE OCC"].split(' ')[0] +
          "<br><strong>Area: </strong>" + crime["AREA NAME"] +
          "<br><strong>Victim Age (if available): </strong>" + crime["Vict Age"] +
          "<br><strong>Victim Gender (if available): </strong>" + crime["Vict Sex"] +
          "<br><strong>Current Status: </strong>" + crime["Status Desc"]);
    
          // console.log(theftMarker);
          // Push marker data for retailers to array
          drunkMarker.addTo(drunkLayer);
        };
    
        // Look in data for Lynching or Lynching - Attempted (Crime Codes 435 & 436)
        if (crime["Crm Cd"] === "435" || crime["Crm Cd"] === "436" ) {
        // console.log(crime.LAT, crime.LON, crime.crime_bin);

          // Create marker based on lat/long
          let lynchMarker = L.marker([crime.LAT, crime.LON], {
                            
            // Use custom icon data
            icon: lynchIcon
    
          // Popup data displays type of crime committed
          }).bindPopup("<strong>Crime Desc: </strong>" + crime["Crm Cd Desc"] + 
          "<br><strong>Date: </strong>" + crime["DATE OCC"].split(' ')[0] +
          "<br><strong>Area: </strong>" + crime["AREA NAME"] +
          "<br><strong>Victim Age (if available): </strong>" + crime["Vict Age"] +
          "<br><strong>Victim Gender (if available): </strong>" + crime["Vict Sex"] +
          "<br><strong>Current Status: </strong>" + crime["Status Desc"]);
    
          // Push marker data for retailers to array
          lynchMarker.addTo(lynchLayer);
        };   

        // Look in data for Bigamy (Crime Codes 948)
        if (crime["Crm Cd"] === "948") {
          // console.log(crime.LAT, crime.LON, crime.crime_bin);
  
            // Create marker based on lat/long
            let bigamyMarker = L.marker([crime.LAT, crime.LON], {
                              
              // Use custom icon data
              icon: bigamyIcon
      
            // Popup data displays type of crime committed
            }).bindPopup("<strong>Crime Desc: </strong>" + crime["Crm Cd Desc"] + 
            "<br><strong>Date: </strong>" + crime["DATE OCC"].split(' ')[0] +
            "<br><strong>Area: </strong>" + crime["AREA NAME"] +
            "<br><strong>Victim Age (if available): </strong>" + crime["Vict Age"] +
            "<br><strong>Victim Gender (if available): </strong>" + crime["Vict Sex"] +
            "<br><strong>Current Status: </strong>" + crime["Status Desc"]);
      
            // Push marker data for retailers to array
            bigamyMarker.addTo(bigamyLayer);
          }; 

        // Look in data for Pimping or Pandering (Crime Codes 805 & 806)
        if (crime["Crm Cd"] === "805" || crime["Crm Cd"] === "806" ) {
        // console.log(crime.LAT, crime.LON, crime.crime_bin);

          // Create marker based on lat/long
          let pimpMarker = L.marker([crime.LAT, crime.LON], {
                            
            // Use custom icon data
            icon: pimpIcon
    
          // Popup data displays type of crime committed
          }).bindPopup("<strong>Crime Desc: </strong>" + crime["Crm Cd Desc"] + 
          "<br><strong>Date: </strong>" + crime["DATE OCC"].split(' ')[0] +
          "<br><strong>Area: </strong>" + crime["AREA NAME"] +
          "<br><strong>Victim Age (if available): </strong>" + crime["Vict Age"] +
          "<br><strong>Victim Gender (if available): </strong>" + crime["Vict Sex"] +
          "<br><strong>Current Status: </strong>" + crime["Status Desc"]);
    
          // Push marker data for retailers to array
          pimpMarker.addTo(pimpLayer);
        }; 

        // Look in data for Peeping Tom or Prowler (Crime Codes 932 & 933)
        if (crime["Crm Cd"] === "932" || crime["Crm Cd"] === "933" ) {
          // console.log(crime.LAT, crime.LON, crime.crime_bin);
  
            // Create marker based on lat/long
            let peepMarker = L.marker([crime.LAT, crime.LON], {
                              
              // Use custom icon data
              icon: peepIcon
      
            // Popup data displays type of crime committed
            }).bindPopup("<strong>Crime Desc: </strong>" + crime["Crm Cd Desc"] + 
            "<br><strong>Date: </strong>" + crime["DATE OCC"].split(' ')[0] +
            "<br><strong>Area: </strong>" + crime["AREA NAME"] +
            "<br><strong>Victim Age (if available): </strong>" + crime["Vict Age"] +
            "<br><strong>Victim Gender (if available): </strong>" + crime["Vict Sex"] +
            "<br><strong>Current Status: </strong>" + crime["Status Desc"]);
      
            // Push marker data for retailers to array
            peepMarker.addTo(peepLayer);
          }; 
      
        // Look in data for Inciting a Riot or Disturbing the Peace (Crime Codes 882 & 886)
        if (crime["Crm Cd"] === "882" || crime["Crm Cd"] === "886" ) {
          // console.log(crime.LAT, crime.LON, crime.crime_bin);
  
            // Create marker based on lat/long
            let riotMarker = L.marker([crime.LAT, crime.LON], {
                              
              // Use custom icon data
              icon: riotIcon
      
            // Popup data displays type of crime committed
            }).bindPopup("<strong>Crime Desc: </strong>" + crime["Crm Cd Desc"] + 
            "<br><strong>Date: </strong>" + crime["DATE OCC"].split(' ')[0] +
            "<br><strong>Area: </strong>" + crime["AREA NAME"] +
            "<br><strong>Victim Age (if available): </strong>" + crime["Vict Age"] +
            "<br><strong>Victim Gender (if available): </strong>" + crime["Vict Sex"] +
            "<br><strong>Current Status: </strong>" + crime["Status Desc"]);
      
            // Push marker data for retailers to array
            riotMarker.addTo(riotLayer);
          }; 

        // Look in data for Throwing Object at Moving Vehicle (Crime Code 647)
        if (crime["Crm Cd"] === "647") {
          // console.log(crime.LAT, crime.LON, crime.crime_bin);
  
            // Create marker based on lat/long
            let throwMarker = L.marker([crime.LAT, crime.LON], {
                              
              // Use custom icon data
              icon: throwIcon
      
            // Popup data displays type of crime committed
            }).bindPopup("<strong>Crime Desc: </strong>" + crime["Crm Cd Desc"] + 
            "<br><strong>Date: </strong>" + crime["DATE OCC"].split(' ')[0] +
            "<br><strong>Area: </strong>" + crime["AREA NAME"] +
            "<br><strong>Victim Age (if available): </strong>" + crime["Vict Age"] +
            "<br><strong>Victim Gender (if available): </strong>" + crime["Vict Sex"] +
            "<br><strong>Current Status: </strong>" + crime["Status Desc"]);
      
            // Push marker data for retailers to array
            throwMarker.addTo(throwLayer);
          }; 

        // Look in data for Bomb Scare (Crime Code 755)
        if (crime["Crm Cd"] === "755") {
          // console.log(crime.LAT, crime.LON, crime.crime_bin);
  
            // Create marker based on lat/long
            let bombMarker = L.marker([crime.LAT, crime.LON], {
                              
              // Use custom icon data
              icon: bombIcon
      
            // Popup data displays type of crime committed
            }).bindPopup("<strong>Crime Desc: </strong>" + crime["Crm Cd Desc"] + 
            "<br><strong>Date: </strong>" + crime["DATE OCC"].split(' ')[0] +
            "<br><strong>Area: </strong>" + crime["AREA NAME"] +
            "<br><strong>Victim Age (if available): </strong>" + crime["Vict Age"] +
            "<br><strong>Victim Gender (if available): </strong>" + crime["Vict Sex"] +
            "<br><strong>Current Status: </strong>" + crime["Status Desc"]);
      
            // Push marker data for retailers to array
            bombMarker.addTo(bombLayer);
          }; 

        // Look in data for Purse Snatching & Purse Snatching Attempt (Crime Code 351 & 451)
        if (crime["Crm Cd"] === "351" || crime["Crm Cd"] === "451" ) {
          // console.log(crime.LAT, crime.LON, crime.crime_bin);
  
            // Create marker based on lat/long
            let purseMarker = L.marker([crime.LAT, crime.LON], {
                              
              // Use custom icon data
              icon: purseIcon
      
            // Popup data displays type of crime committed
            }).bindPopup("<strong>Crime Desc: </strong>" + crime["Crm Cd Desc"] + 
            "<br><strong>Date: </strong>" + crime["DATE OCC"].split(' ')[0] +
            "<br><strong>Area: </strong>" + crime["AREA NAME"] +
            "<br><strong>Victim Age (if available): </strong>" + crime["Vict Age"] +
            "<br><strong>Victim Gender (if available): </strong>" + crime["Vict Sex"] +
            "<br><strong>Current Status: </strong>" + crime["Status Desc"]);
      
            // Push marker data for retailers to array
            purseMarker.addTo(purseLayer);
          }; 
          
        // Look in data for Assault With Deadly Weapon On Police Officer (Crime Code 231)
        if (crime["Crm Cd"] === "231") {
          // console.log(crime.LAT, crime.LON, crime.crime_bin);
  
            // Create marker based on lat/long
            let policeMarker = L.marker([crime.LAT, crime.LON], {
                              
              // Use custom icon data
              icon: policeIcon
      
            // Popup data displays type of crime committed
            }).bindPopup("<strong>Crime Desc: </strong>" + crime["Crm Cd Desc"] + 
            "<br><strong>Date: </strong>" + crime["DATE OCC"].split(' ')[0] +
            "<br><strong>Area: </strong>" + crime["AREA NAME"] +
            "<br><strong>Victim Age (if available): </strong>" + crime["Vict Age"] +
            "<br><strong>Victim Gender (if available): </strong>" + crime["Vict Sex"] +
            "<br><strong>Current Status: </strong>" + crime["Status Desc"]);
      
            // Push marker data for retailers to array
            policeMarker.addTo(policeLayer);
          }; 

        // Look in data for Threatening Phone Calls/Letters (Crime Code 928)
        if (crime["Crm Cd"] === "928") {
          // console.log(crime.LAT, crime.LON, crime.crime_bin);
  
            // Create marker based on lat/long
            let threatMarker = L.marker([crime.LAT, crime.LON], {
                              
              // Use custom icon data
              icon: threatIcon
      
            // Popup data displays type of crime committed
            }).bindPopup("<strong>Crime Desc: </strong>" + crime["Crm Cd Desc"] + 
            "<br><strong>Date: </strong>" + crime["DATE OCC"].split(' ')[0] +
            "<br><strong>Area: </strong>" + crime["AREA NAME"] +
            "<br><strong>Victim Age (if available): </strong>" + crime["Vict Age"] +
            "<br><strong>Victim Gender (if available): </strong>" + crime["Vict Sex"] +
            "<br><strong>Current Status: </strong>" + crime["Status Desc"]);
      
            // Push marker data for retailers to array
            threatMarker.addTo(threatLayer);
          }; 

        // Look in data for Extortion (Crime Code 940)
        if (crime["Crm Cd"] === "940") {
          // console.log(crime.LAT, crime.LON, crime.crime_bin);
  
            // Create marker based on lat/long
            let extortionMarker = L.marker([crime.LAT, crime.LON], {
                              
              // Use custom icon data
              icon: extortionIcon
      
            // Popup data displays type of crime committed
            }).bindPopup("<strong>Crime Desc: </strong>" + crime["Crm Cd Desc"] + 
            "<br><strong>Date: </strong>" + crime["DATE OCC"].split(' ')[0] +
            "<br><strong>Area: </strong>" + crime["AREA NAME"] +
            "<br><strong>Victim Age (if available): </strong>" + crime["Vict Age"] +
            "<br><strong>Victim Gender (if available): </strong>" + crime["Vict Sex"] +
            "<br><strong>Current Status: </strong>" + crime["Status Desc"]);
      
            // Push marker data for retailers to array
            extortionMarker.addTo(extortionLayer);
          }; 

        // Look in data for Lewd Conduct and Indecent Exposure (Crime Code 762 & 850)
        if (crime["Crm Cd"] === "762" || crime["Crm Cd"] === "850" ) {
          // console.log(crime.LAT, crime.LON, crime.crime_bin);
  
            // Create marker based on lat/long
            let lewdMarker = L.marker([crime.LAT, crime.LON], {
                              
              // Use custom icon data
              icon: lewdIcon
      
            // Popup data displays type of crime committed
            }).bindPopup("<strong>Crime Desc: </strong>" + crime["Crm Cd Desc"] + 
            "<br><strong>Date: </strong>" + crime["DATE OCC"].split(' ')[0] +
            "<br><strong>Area: </strong>" + crime["AREA NAME"] +
            "<br><strong>Victim Age (if available): </strong>" + crime["Vict Age"] +
            "<br><strong>Victim Gender (if available): </strong>" + crime["Vict Sex"] +
            "<br><strong>Current Status: </strong>" + crime["Status Desc"]);
      
            // Push marker data for retailers to array
            lewdMarker.addTo(lewdLayer);
          }; 

    }
  }
});       

// Create the tile layer that will be the background of our map.
let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// // Create separate layer groups for each crime category type 
let drunkLayer = L.layerGroup(drunkMarkers);
let lynchLayer = L.layerGroup(lynchMarkers);
let bigamyLayer = L.layerGroup(bigamyMarkers);
let pimpLayer = L.layerGroup(pimpMarkers);
let peepLayer = L.layerGroup(peepMarkers);
let riotLayer = L.layerGroup(riotMarkers);
let throwLayer = L.layerGroup(throwMarkers);
let bombLayer = L.layerGroup(bombMarkers);
let purseLayer = L.layerGroup(purseMarkers);
let policeLayer = L.layerGroup(policeMarkers);
let threatLayer = L.layerGroup(threatMarkers);
let extortionLayer = L.layerGroup(extortionMarkers);
let lewdLayer = L.layerGroup(lewdMarkers);


// Create a baseMaps object to hold the streetmap layer.
let baseMaps = {
  Street: streetmap
};

// // Create an overlayMaps object to hold the additional layers.
let overlayMaps = {
    "Drunk Roll": drunkLayer, 
    "Lynching": lynchLayer,
    "Bigamy" : bigamyLayer,
    "Pimping/Pandering": pimpLayer,
    "Peeping Tom/Prowler": peepLayer,
    "Inciting a Riot/Disturbing the Peace": riotLayer,
    "Throwing Object at Moving Vehicle": throwLayer,
    "Bomb Scare": bombLayer,
    "Purse Snatching": purseLayer,
    "Assault on Officer": policeLayer,     
    "Threatening Phone Calls/Letters": threatLayer,
    "Extortion": extortionLayer,
    "Lewd Conduct/Indecent Exposure": lewdLayer
    };

      // Create the map with our layers.
let myMap = L.map("map-id", {
  center: [34.05873413381703, -118.24590611860148],
  zoom: 11,

  // layers: [streetmap, drunkLayer, lynchLayer, bigamyLayer, pimpLayer, peepLayer, riotLayer, throwLayer, bombLayer, purseLayer, policeLayer, threatLayer, extortionLayer, lewdLayer]
  // only displaying mayers with data 
  layers: [streetmap, drunkLayer]
});

// Pass our map layers to our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(myMap);








