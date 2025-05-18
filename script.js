async function fetchLocationAndAQI() {
  navigator.geolocation.getCurrentPosition(async position => {
    const { latitude, longitude } = position.coords;
    document.getElementById("location").textContent = `Lat: ${latitude}, Lon: ${longitude}`;
    const response = await fetch(`/api/getAQI?lat=${latitude}&lon=${longitude}`);
    const data = await response.json();
    const aqi = data.list[0].main.aqi;
    document.getElementById("aqi").textContent = `AQI Level: ${aqi}`;
  });
}
fetchLocationAndAQI();
