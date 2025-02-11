const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your API key

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("cityName").innerHTML = `📍 ${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").innerHTML = `🌡️ Temperature: ${data.main.temp}°C`;
        document.getElementById("description").innerHTML = `⛅ Condition: ${data.weather[0].description}`;
        document.getElementById("humidity").innerHTML = `💧 Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").innerHTML = `🌬️ Wind Speed: ${data.wind.speed} m/s`;

        document.getElementById("weatherInfo").classList.remove("hidden");
    })
    .catch(error => {
        alert("City not found! Please try again.");
        console.error(error);
    });
}
