document.addEventListener('DOMContentLoaded', function() {
    
    const weatherInfo = document.getElementById('weather-info')
    const apiKey = ''
    const city = 'Oulu'
  
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        
        const weatherDescription = data.weather[0].description
        const temperature = data.main.temp
  
        weatherInfo.innerHTML = `
          <p>City: ${city}</p>
          <p>Weather: ${weatherDescription}</p>
          <p>Temperature: ${temperature}°C</p>
        `
      })
      .catch(error => {
        console.error('Error fetching weather data:', error)
        weatherInfo.innerHTML = `<p>Error fetching weather data</p>`
      })
  })
  