// Assuming fetchWeatherData() is defined elsewhere and returns the weather data

async function fetchWeatherData() {
    try {
      const response = await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en');
      const data = await response.json();
  
      const forecast = data.weatherForecast; // Assuming 'weatherForecast' is a key in the API response
      const forecastTemps = forecast.map(item => ({
          day: item.week,
          forecastMaxtemp: item.forecastMaxtemp.value,
          forecastMintemp: item.forecastMintemp.value
        }));
        
      const forecastAvgtemps = forecastTemps.slice(0, 7).map(item => ({
          day: item.day,
          avgTemp: (item.forecastMaxtemp + item.forecastMintemp) / 2
      }));
  
      return { forecastAvgtemps };
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
fetchWeatherData().then(data => console.log(data));

async function generateTable() {
  // Fetch the weather data
  const weatherData = await fetchWeatherData();
  const forecastAvgtemps = weatherData.forecastAvgtemps;

  // Get the table rows
  const daysRow = document.getElementById('daysRow');
  const carbonRow = document.getElementById('carbonRow');

  // Populate the table with the days
  forecastAvgtemps.forEach(item => {
    const dayCell = document.createElement('th');
    dayCell.textContent = item.day.slice(0, 3);
    daysRow.appendChild(dayCell);
  });

  // Populate the table with the carbon reduction values
  forecastAvgtemps.forEach(item => {
    const carbonCell = document.createElement('td');
    const carbonReductionValue = 1366 * (3.4 + 1.4 * item.avgTemp) / 37.7;
    carbonCell.textContent = `${parseFloat(carbonReductionValue.toPrecision(3)).toLocaleString()}`;
    carbonRow.appendChild(carbonCell);
  });
}
  
  document.addEventListener('DOMContentLoaded', (event) => {
    generateTable();
  });