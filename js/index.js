setTimeout(function() {
    document.body.style.backgroundImage = "url('/IMG/basic-blue.svg')";
    document.getElementsByClassName('video-container')[0].style.display = 'none';
    document.getElementsByClassName('glass-container')[0].style.display = 'flex';
    document.getElementsByClassName('location-container')[0].style.display = 'flex';
}, 8000);
// the body element is initially set to have a background image of the loading page using the background-image property in CSS. The transition property is also used to add a smooth transition effect when the background image changes.
//
//     JavaScript is used to trigger the image change after an 8-second delay using the setTimeout function. The setTimeout function takes a callback function as its first argument, which sets the backgroundImage property of the body element to the fake data image after 8 seconds, effectively changing the background image.
//Next I need to use AJAX to make the call(request) to the API and get the data. I will use the jQuery library to make the AJAX call.

function makeAjaxCall(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6f1f6d5b6b5c7b5f2b2e7d2f6c5f7d1e',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            console.log(data);
        },
        error: function(error){
            console.log(error);
        }
    });
}
makeAjaxCall();