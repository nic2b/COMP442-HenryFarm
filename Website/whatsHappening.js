$( document ).ready(function() {
  
  var request = new XMLHttpRequest();

  // Variables for GET request
  api_url = "http://forecast.weather.gov/MapClick.php";
  lat = 41.155857;
  lon = -80.078392;
  FcstType = "json"

  // GET request
  request.open('GET', api_url + "?lat=" + lat + "&lon=" + lon + "&FcstType=" + FcstType, true)
  request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
    $("#weather").after(JSON.stringify(data.currentobservation));
  }
  request.send();
  

});
