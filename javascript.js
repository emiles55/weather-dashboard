

function renderWeather(weather){
  city=document.getElementById("#location");
  temp=document.getElementById("#degrees");
  city.textContent=weather.name;
  temp.textContent=weather.main.temp;

}
function fetchWeather(query){
var url= "https://api.openweathermap.org/data/2.5/weather?q=" +"Denver"+
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
.then((data) => console.log(data))
}
fetchWeather();