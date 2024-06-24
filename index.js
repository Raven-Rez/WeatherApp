const btnEl = document.getElementById("search-btn");
const searchEl = document.getElementById("input-box");
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiKey = "8b1e7daaa6f20479706438d703cb224e" // &appid=;
const temperature = document.querySelector(".temperature");
const weatherIconEl = document.querySelector(".weather-icon");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
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
        temperature.textContent = `${parseInt(data.main.temp)}°C`;
        humidity.textContent = `${data.main.humidity}%`;
        windSpeed.textContent = `${parseInt(data.wind.speed)} km/h`;
        weatherIconEl.src = `images/${data.weather[0].main.toLowerCase()}.png`;
    });
    
}