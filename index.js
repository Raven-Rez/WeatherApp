const btnEl = document.getElementById("search-btn");
const searchEl = document.getElementById("input-box");
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiKey = "8b1e7daaa6f20479706438d703cb224e" // &appid=;
const weatherInformation = document.getElementById("weather-information");
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
        renderCard(data.name, data.main.temp, data.main.humidity, data.wind.speed, data.weather[0].main);
    });
}

function renderCard(nameOfCity, currentTemperature, currentHumidity, currentWindSpeed, currentWeatherIcon){
    weatherInformation.textContent = "";
    
    const weatherPlace = document.createElement('div');
    weatherPlace.id = "weather-place";

    const upperTemplate = document.createElement('div');
    upperTemplate.classList.add("upper-template");

    const iconTemp = document.createElement("div");
    iconTemp.classList.add("icon-temp");
    
    const weatherIcon = document.createElement("img");
    weatherIcon.classList.add("weather-icon");
    weatherIcon.src = `images/${currentWeatherIcon.toLowerCase()}.png`;

    const temperatureCelsius = document.createElement('h1');
    temperatureCelsius.classList.add("temperature");
    temperatureCelsius.textContent = `${parseInt(currentTemperature)}°C`;

    iconTemp.append(weatherIcon);
    iconTemp.append(temperatureCelsius);

    const CityName = document.createElement('h1');
    CityName.classList.add("city-name");
    CityName.textContent = nameOfCity;

    upperTemplate.append(iconTemp);
    upperTemplate.append(CityName);

    weatherPlace.append(upperTemplate);

    const details = document.createElement("div");
    details.classList.add("details");

    const column1 = document.createElement("div");
    column1.classList.add("column-1");

    const humidityIcon = document.createElement("img");
    humidityIcon.classList.add("humidity-icon");
    humidityIcon.src = "images/humidity.png";

    column1.append(humidityIcon);

    const paragraph1 = document.createElement('div');

    const p1 = document.createElement("p");
    p1.classList.add('humidity');
    p1.textContent = `${currentHumidity}%`;

    const p2 = document.createElement("p");
    p2.textContent = "Humidity";

    paragraph1.append(p1);
    paragraph1.append(p2);
    column1.append(paragraph1);
    details.append(column1);

    const column2 = document.createElement("div");
    column2.classList.add("column-2");

    const windIcon = document.createElement("img");
    windIcon.classList.add("wind-icon");
    windIcon.src = "images/wind.png";

    column2.append(windIcon);

    const paragraph2 = document.createElement('div');

    const p3 = document.createElement("p");
    p3.classList.add('wind-speed');
    p3.textContent = `${currentWindSpeed} km/h`;

    const p4 = document.createElement("p");
    p4.textContent = "Wind Speed";

    paragraph2.append(p3);
    paragraph2.append(p4);
    column2.append(paragraph2);
    details.append(column2);

    weatherPlace.append(details);

    // const searchBox = document.getElementById("search-box");
    // searchBox.insertAdjacentElement("afterend", weatherPlace);
    weatherInformation.append(weatherPlace);
}

