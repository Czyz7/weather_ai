function getWeather() {
    const locationInput = document.getElementById("locationInput");
    const location = locationInput.value;
  
    // Make an API call to fetch weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d9eec9af4da82304cc2fd6702c555dd7`)
      .then(response => response.json())
      .then(data => {
        // Extract relevant information from the response
        const temperature = data.main.temp;
        const description = data.weather[0].description;
  
        // Display the weather information
        const weatherContainer = document.getElementById("weatherContainer");
        weatherContainer.innerHTML = `<p>Temperature: ${temperature} K</p>
                                       <p>Description: ${description}</p>`;
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
  }
  