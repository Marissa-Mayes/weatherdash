// assigning key to variable//
var weatherKey = "f9f9480eb3457ba8b434d246262f3d1d"
// function to get weather and city data//
function getWeather(city){
var queryURL ="https://api.openweathermap.org/data/2.5/forecast?q="+ city + "&appid=" + weatherKey
// call to receive weather, passing city data via weather api//

    $.ajax({
    url:queryURL,
    method: "GET"
}).then(function(response){
  console.log(response);  
})
}
// click listener for city submission
$("#enter").on("click", function(event){
    event.preventDefault();
    var cityInput = $("#city").val();
    getWeather(cityInput);
});