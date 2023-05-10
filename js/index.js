setTimeout(function() {
    document.body.style.backgroundImage = "url('/IMG/ombre-blue.svg')";
    document.getElementsByClassName('glass-container')[0].style.display = 'flex';
    document.getElementsByClassName('glass-container-delta')[0].style.display = 'flex';
    document.getElementsByClassName('navbar')[0].style.display = 'flex';
    document.getElementsByClassName('search-container')[0].style.display = 'inline-block';
    document.getElementsByClassName('link-bar')[0].style.display = 'flex';
}, 3000);

var combobox = document.getElementById('combobox');
var listbox = document.getElementById('listbox');

combobox.addEventListener('input', function() {
    var input = this.value;
    var options = listbox.getElementsByTagName('li');
    for (var i = 0; i < options.length; i++) {
        var option = options[i];

        if(option.textContent.toLowerCase().indexOf(input.toLowerCase()) !== -1){
            option.style.display = 'block';
        }
        else {
            option.style.display = 'none';
        }
    }
    listbox.setAttribute('aria-activeDescendant', '');
});
listbox.addEventListener('click', function(e) {
    if(e.target && e.target.nodeName === 'LI') {
        combobox.value = e.target.textContent;
        listbox.style.display = 'none';
        listbox.setAttribute('aria-activeDescendant', '');
    }
});










//Next I need to use AJAX to make the call(request) to the API and get the data. I will use the jQuery library to make the AJAX call.
// let autocomplete;
// function initAutocomplete() {
//     autocomplete = new google.maps.places.Autocomplete(
//         document.getElementById('autocomplete'),
//         {
//             types: ['cities'],
//             componentRestrictions: { country: 'US' },
//         });
// }
// initAutocomplete();

// Get the input field id #autocomplete and use conditional logic to check if the user has entered a value. If the user has entered a value, the value is stored in the variable city. If the user has not entered a value, the variable city is set to the default value of 'New York'.
// let citySearch = document.getElementById("autocomplete"); //user input
// citySearch.addEventListener('keypress', function() {
//     let city = citySearch.value;
//     let dropdown = document.getElementById("dropdown");
//     dropdown.innerText = city;
//     //need to attach the results to a container aka a div under the input field
// });

