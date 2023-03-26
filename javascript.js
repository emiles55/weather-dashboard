

function renderWeather(weather){
  city=document.getElementById("location");
  temp=document.getElementById("dayOneTemp");
  humid=document.getElementById("humidity");
  city.textContent=weather.name;
  temp.textContent=weather.main.temp;
  humid.textContent=weather.main.humidity;

}
function fetchWeatherByCity(query){
var url= "https://api.openweathermap.org/data/2.5/weather?q=" +"Raleigh"+
"&units=imperial&appid=" +
"9258a0385e244fedfb9b649c2c90053a";
fetch(url)
.then((response) => {
  if (!response.ok) {
    alert("No weather found.");
    throw new Error("No weather found.");
  }
  return response.json();
})
.then((data) => fetchWeatherByCoordinates(data))
//.then((data)=>console.log(data))
}
fetchWeatherByCity();
function fetchWeatherByCoordinates(weather){
  var lon=weather.coord.lon;
  var lat=weather.coord.lat;
  console.log(lon);
  console.log(lat);
  var searchByCoord="https://api.openweathermap.org/data/2.5/forecast?lat="+lon+"&lon="+lat+"&appid="+"9258a0385e244fedfb9b649c2c90053a";
  fetch(searchByCoord)
  .then((response) => {
    if (!response.ok) {
      alert("No weather found.");
      throw new Error("No weather found.");
    }
    return response.json();
  })
  .then((data) => console.log(data))
}