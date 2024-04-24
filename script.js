function fetchWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = '261ca4d4321ef88aec34de587969ab56';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(weatherUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather data not found');
            }
            return response.json();
        })
        .then(data => {
            const result = `Temperature: ${data.main.temp}°C, Condition: ${data.weather[0].main}`;
            document.getElementById('weatherResult').innerHTML = result;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `Error: ${error.message}`;
        });
}

function cattt() {
    const catUrl = 'https://catfact.ninja/fact';
    fetch(catUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Cat data not found');
        }
        return response.json();
    })
    .then(data => {
        // const articles = data.articles.map(article => `<li>${article.fact}</li>`).join('');
        document.getElementById('catResults').innerHTML = `<ul>${data.fact}</ul>`;
    })
    .catch(error => {
        document.getElementById('catResults').innerHTML = `Error: ${error.message}`;
    });
}

