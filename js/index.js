setTimeout(function() {
    document.body.style.backgroundImage = "url('/IMG/ombre-blue.svg')";
    document.getElementsByClassName('glass-container')[0].style.display = 'flex';
    document.getElementsByClassName('glass-container-delta')[0].style.display = 'flex';
    document.getElementsByClassName('navbar')[0].style.display = 'flex';
    document.getElementsByClassName('search-container')[0].style.display = 'inline-block';
    document.getElementsByClassName('link-bar')[0].style.display = 'flex';
}, 2000);

// get the users input from the search bar
// then use that input to make an ajax call to the api
// then display the data on the page





// the body element is initially set to have a background image of the loading page using the background-image property in CSS. The transition property is also used to add a smooth transition effect when the background image changes.
//     JavaScript is used to trigger the image change after an 8-second delay using the setTimeout function. The setTimeout function takes a callback function as its first argument, which sets the backgroundImage property of the body element to the fake data image after 8 seconds, effectively changing the background image.
//Next I need to use AJAX to make the call(request) to the API and get the data. I will use the jQuery library to make the AJAX call.

