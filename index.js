function myFunction(){
    const inputObj = document.getElementById("input");
    if (inputObj.validity.rangeOverflow){
        document.getElementById("demo").innerHTML = "Value is too large"
    }
    if(inputObj.validity.rangeUnderflow){
        document.getElementById("demo").innerHTML = "Value is to short"
    }
    }
console.log(history.length)
if(typeof(Worker) !== 'undefined'){
    console.log("This webt worker does work/s")
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position){
    document.getElementById("demo").innerHTML = "Latitude: " + position.coords.latitude +
    "<br> Longtitude: " + position.coords.longitude
}