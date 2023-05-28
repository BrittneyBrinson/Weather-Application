setTimeout(function() {
    document.body.style.backgroundImage = "url('/IMG/ombre-blue.svg')";
    document.getElementsByClassName('glass-container')[0].style.display = 'flex';
    document.getElementsByClassName('glass-container-delta')[0].style.display = 'flex';
    document.getElementsByClassName('navbar')[0].style.display = 'flex';
    document.getElementsByClassName('search-container')[0].style.display = 'inline-block';
    document.getElementsByClassName('link-bar')[0].style.display = 'flex';
}, 3000);


function getUserInput(){
    let userInput = document.getElementById('search-box-api').value;
    console.log(userInput)
    let showLocation = document.getElementById('display-search');
    showLocation.innerHTML = "Location: " + userInput;
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userInput},&limit=5&appid=${weather_key}`)
        .then(response => response.json())
        .then(data => {
            // Process the response data

            console.log(data[0].lat)
            console.log(data[0].lon);
    })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });

}
























