export default async function handler(req, res) {
  const { lat, lon } = req.query;
  const key = process.env.WEATHER_API;
  const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${key}`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
}
