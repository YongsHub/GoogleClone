/* API를 이용하여 user의 latitude와 longitude를 알 수 있습니다. */
function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    console.log(`You live in ${lat}, ${log}`);
}

function onGeoError() {
    console.log("Can't Find You. Weather can't give you Information");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);