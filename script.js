const apiKey = "5d7ca5e049b355b5b30c138ed8211c0b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "Images/Clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "Images/Clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "Images/Rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "Images/Drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "Images/Mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

