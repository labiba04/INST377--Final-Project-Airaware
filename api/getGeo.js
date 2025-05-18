export default async function handler(req, res) {
  const { city } = req.query;
  const key = process.env.WEATHER_API;
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
}
