setTimeout(function() {
    document.body.style.backgroundImage = "url('/IMG/ombre-blue.svg')";
    document.getElementsByClassName('glass-container')[0].style.display = 'flex';
    document.getElementsByClassName('glass-container-delta')[0].style.display = 'flex';
    document.getElementsByClassName('navbar')[0].style.display = 'flex';
    document.getElementsByClassName('search-container')[0].style.display = 'inline-block';
    document.getElementsByClassName('link-bar')[0].style.display = 'flex';
}, 3000);

const search = new MapboxSearchBox();
search.accessToken = mapbox_key;
search.addEventListener('suggest', (event) => {
    const suggestions = event.detail.suggestions;
});
search.addEventListener('retrieve', (event) => {
    const featureCollection = event.detail;

    let locationDisplay = document.getElementById('display-search');
    locationDisplay.innerText = featureCollection;
    console.log(locationDisplay);
});

















