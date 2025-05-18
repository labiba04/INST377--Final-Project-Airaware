const ctx = document.getElementById("aqiChart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["CO", "NO2", "PM2.5", "PM10", "O3"],
    datasets: [{
      label: "Pollutant Levels",
      data: [0.5, 1.2, 35, 50, 10],
      borderWidth: 1
    }]
  },
});
