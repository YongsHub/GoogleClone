/* API를 이용하여 user의 latitude와 longitude를 알 수 있습니다. */


var globalVariable={
    x: 'a8639face03ce742f90d2bde87232a22'
 };
 
function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`You live in ${lat}, ${lon}`);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${globalVariable.x}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.name, data.main.temp, data.weather[0].main);
            const city = document.querySelector(".weather #first");
            const weather = document.querySelector(".weather #second");
            const temperature = document.querySelector(".weather #third");
            city.innerText = `도시 : ${data.name}`;
            weather.innerText = `날씨: ${data.weather[0].main}`;
            temperature.innerText = `온도 : ${data.main.temp}`;
        });
}

function onGeoError() {
    console.log("Can't Find You. Weather can't give you Information");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);