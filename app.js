//Make Map, Tiles And Icon:

///////////////////////////////////////[]Location, zoom lvl:
const mymap = L.map('iss-map').setView([0, 0], 1);
//Set marker Icon:
const myIcon = L.icon({
    iconUrl: 'icon.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});
//create marker:
const marker = L.marker([0,0], {icon: myIcon}).addTo(mymap);


//Open Street Map Attribution:
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">open street map</a> contributors.'

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(mymap);




//Get Dom Elements:
const lat = document.getElementById('latitude');
const long = document.getElementById('longitude');
const alti = document.getElementById('altitude');

const apiUrl = 'https://api.wheretheiss.at/v1/satellites/25544';
//Async function to get the data from API:
async function getLocation(){
    const resp = await fetch(apiUrl);
    const data = await resp.json();
    const {latitude,longitude,altitude} = data;
     marker.setLatLng([latitude,longitude])
     //mymap.setView([latitude,longitude], mymap.getZoom());
    lat.innerText = latitude;
    long.innerText = longitude;
    alti.innerText = altitude;

}

getLocation();
setInterval(getLocation,3000);






