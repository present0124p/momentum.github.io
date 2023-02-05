const loc = document.querySelector('#location');
const weather = document.querySelector('#weather');
const API_KEY = "2834387742b25d5393a21e88fee8246a";

function handleGeoSuccess(position) {
    console.log(position);
    const latitude = position.coords.latitude;  // 경도  
    const longitude = position.coords.longitude;  // 위도
    getWeather(latitude, longitude);
    loc.innerText =`위도 : ${longitude}, 경도 : ${latitude}`;
 }
 
 function handleGeoError() {
    console.log("geo err! " + err);
 }
 
 function requestCoords() {
     navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
 }

 function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
        const temp = data.main.temp;
        const weathers = data.weather[data.weather.length -1];
        weather.innerHTML = `${temp}&#176;C ${weathers.main}`;
    })
}

requestCoords();