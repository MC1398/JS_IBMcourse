function showweatherDetails(event) {
      event.preventDefault();
       const city = document.getElementById('city').value;
      const apiKey = '7c6791204d55240c4b84e608bf213fb0'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API key}`;


       fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );






