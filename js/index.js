setTimeout(function () {
    document.body.style.backgroundImage = "url('/IMG/ombre-blue.svg')";
    document.getElementsByClassName('glass-container')[0].style.display = 'flex';
    document.getElementsByClassName('glass-container-delta')[0].style.display = 'flex';
    document.getElementsByClassName('navbar')[0].style.display = 'flex';
    document.getElementsByClassName('search-container')[0].style.display = 'inline-block';
    document.getElementsByClassName('link-bar')[0].style.display = 'flex';
}, 3000);


function getUserInput() {
    let userInput = document.getElementById('search-box-api').value;
    let showLocation = document.getElementById('location-name');
    showLocation.innerHTML = "Location: " + userInput.toUpperCase();
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userInput},&limit=5&appid=${weather_key}`)
        .then(response => response.json())
        .then(data => {
            let lat = data[0].lat;
            let lon = data[0].lon;
            return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${weather_key}`)
        })
        .then(response  => response.json())
        .then((data) => {
            console.log(data)
            let temp = data.main.temp;
            let tempF = Math.round((temp));
            let showTemp = document.getElementById('temp');

            let cloudyOrNot = data.weather[0].main;
            let showCloudyOrNot = document.getElementById('cloudy-or-not');

            let highTemp = data.main.temp_max;
            let highTempF = Math.round((highTemp));
            let showHighTemp = document.getElementById('high-temp');

            let lowTemp = data.main.temp_min;
            let lowTempF = Math.round((lowTemp));
            let showLowTemp = document.getElementById('low-temp');


            showTemp.innerHTML = "Currently: " + tempF + "°F";
            showCloudyOrNot.innerHTML = cloudyOrNot;
            showHighTemp.innerHTML = "High: " + highTempF + "°F";
            showLowTemp.innerHTML = "Low: " + lowTempF + "°F";


            let weatherBackground = document.getElementById('weather-background');
            //section for if statements to change background image and icon based on weather
            if (cloudyOrNot === "Clouds"){
                weatherBackground.style.backgroundImage = "url('/IMG/cloudy.svg')";
                weatherBackground.style.backgroundSize = "cover";
            }
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });


}
























