class Wunderground {

 async getWeather(city) {
  let response = await fetch(`http://api.wunderground.com/api/7f21565d35515914/conditions/q/HU/${city}.json`);

  let resData = await response.json();
  return resData;
 }
}