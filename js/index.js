setTimeout(function() {
    document.body.style.backgroundImage = "url('/IMG/ombre-blue.svg')";
    document.getElementsByClassName('glass-container')[0].style.display = 'flex';
    document.getElementsByClassName('glass-container-delta')[0].style.display = 'flex';
    document.getElementsByClassName('navbar')[0].style.display = 'flex';
    document.getElementsByClassName('search-container')[0].style.display = 'inline-block';
    document.getElementsByClassName('link-bar')[0].style.display = 'flex';
}, 3000);






// the body element is initially set to have a background image of the loading page using the background-image property in CSS. The transition property is also used to add a smooth transition effect when the background image changes.
//     JavaScript is used to trigger the image change after an 8-second delay using the setTimeout function. The setTimeout function takes a callback function as its first argument, which sets the backgroundImage property of the body element to the fake data image after 8 seconds, effectively changing the background image.
//Next I need to use AJAX to make the call(request) to the API and get the data. I will use the jQuery library to make the AJAX call.
let autocomplete;
function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            types: ['cities'],
            componentRestrictions: { country: 'US' },
        });
}
initAutocomplete();

// Get the input field id #autocomplete and use conditional logic to check if the user has entered a value. If the user has entered a value, the value is stored in the variable city. If the user has not entered a value, the variable city is set to the default value of 'New York'.
let citySearch = document.getElementById('autocomplete'); //user input
citySearch.addEventListener('keypress', function() { //keypress is used or keydown because it is triggered when the user presses a key on the keyboard and isn't triggered when the user clicks on the input field. A character must be entered for the event to be triggered.
//attach the input element value to the select element, so that the user can select the city from the dropdown menu and the weather data will be displayed for the selected city.
});

