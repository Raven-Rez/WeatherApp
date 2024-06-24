const btnEl = document.getElementById("search-btn");
const searchEl = document.getElementById("input-box");
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiKey = "8b1e7daaa6f20479706438d703cb224e" // &appid=;
let cityName = "hi";
btnEl.addEventListener("click", function(){
    cityName = searchEl.value;
    checkWeather();
    searchEl.value="";
});



let displayCityName = document.querySelector(".city-name") //&q=


function checkWeather(){
    fetch(apiUrl + `&q=${cityName}&appid=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
        displayCityName.textContent = data.name;
    });
    
}