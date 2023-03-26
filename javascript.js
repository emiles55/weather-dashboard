

function renderWeather(weather){
  city=document.getElementById("location");
  wind=document.getElementById("windSpeed");
  temp=document.getElementById("dayOneTemp");
  humid=document.getElementById("humidity");
  dateChange=document.getElementById("date");
  icon = document.getElementById("weatherIcon");
  date.textContent=weather.list[0].dt_txt;
  console.log(weather.dt_txt);
  city.textContent=weather.city.name;
  temp.textContent=weather.list[0].main.temp;
  humid.textContent=weather.list[0].main.humidity;
  wind.textContent=weather.list[0].wind.speed;
  icon.setAttribute("src", "https://openweathermap.org/img/wn/"+weather.list[0].weather[0].icon+"@2x.png");

}
function fetchWeatherByCity(query){
var url= "https://api.openweathermap.org/data/2.5/weather?q=" +"Denver"+
"&units=metric&appid=" +
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
  var searchByCoord="https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+"9258a0385e244fedfb9b649c2c90053a";
  fetch(searchByCoord)
.then((response) => {
  if (!response.ok) {
    alert("No weather found.");
    throw new Error("No weather found.");
  }
    return response.json();
  })
 .then((data) => renderWeather(data))
 //.then((data) => console.log(data))
}
