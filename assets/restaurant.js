let lat = "";
let lng = "";
let restCount = Math.floor(Math.random() * 99);

let restName;
let restCuisines;
let restAddress;
let restHours;
let restThumb;
let restRating;
let restPhone;
let ratingColor;


function onPositionReceived(position) {
    console.log(position);
    lat = position.coords.latitude;
    lng = position.coords.longitude;


}

function locationNotReceived(positionError) {
    console.log(positionError);
}
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onPositionReceived, locationNotReceived);
}



// function getRestaurant() {



// }