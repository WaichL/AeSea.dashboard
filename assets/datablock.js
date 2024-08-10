function generateRandomNumber(floor, ceiling) {
    let random = Math.random() * (ceiling - floor) + floor;
    return parseFloat(random.toFixed(2));
  }
  

  function updateHTMLWithId(temperature,elementId) {
    document.getElementById(elementId).innerText = `${temperature}°C`;
  }
  
  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}`;
  }
  


window.setInterval(function () {
    let RefInTemp = generateRandomNumber(42.9,43.1).toFixed(2);
    updateHTMLWithId(RefInTemp,"refrigerant-temp-in");
    let RefOutTemp = generateRandomNumber(6.9,7.1).toFixed(2);
    updateHTMLWithId(RefOutTemp,"refrigerant-temp-out");
    let FluOutTemp = generateRandomNumber(28.9,29.1).toFixed(2);
    updateHTMLWithId(FluOutTemp,"flushing-temp-in");
    let FluInTemp = generateRandomNumber(22.9,23.1).toFixed(2);
    updateHTMLWithId(FluInTemp,"flushing-temp-out");
    updateTime();
  }, 3000);