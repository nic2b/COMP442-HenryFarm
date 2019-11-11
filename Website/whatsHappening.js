$( document ).ready(function() {
  // Variable for weather API
  // https://weatherstack.com/
  // Email: ethanharvey98@gmail.com
  // Password: Tonyboy123
  
  var request = new XMLHttpRequest();

  // What a typical response looks like
  data = {"request":{"type":"City","query":"Grove City, United States of America",
  "language":"en","unit":"m"},"location":{"name":"Grove City","country":"United States of America",
  "region":"Pennsylvania","lat":"41.158","lon":"-80.089","timezone_id":"America/New_York",
  "localtime":"2019-11-11 08:44","localtime_epoch":1573461840,"utc_offset":"-5.0"},
  "current":{"observation_time":"01:44 PM","temperature":4,"weather_code":122,
  "weather_icons":["https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"],
  "weather_descriptions":["Overcast"],"wind_speed":6,"wind_degree":60,"wind_dir":"ENE","pressure":1018,
  "precip":0.1,"humidity":93,"cloudcover":100,"feelslike":3,"uv_index":1,"visibility":11,"is_day":"yes"}};

  console.log(data);
  $("#weather").after(JSON.stringify(data));
  var temp = data.current.temperature * 1.8 + 32;
  console.log(temp);

  // Actual GET request commented out to save from using up free tier

  /*
  // Variables for GET request
  api_url = "http://api.weatherstack.com/current";
  key = "388a98407cb9568be36050c937841293";
  city = "Grove City, PA";

  // GET request
  request.open('GET', api_url + "?access_key=" + key + "&query=" + city, true)
  request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
    // Populate Data
    $("#weather").after(JSON.stringify(data));
    var temp = data.current.temperature * 1.8 + 32;
    console.log(temp);
  }
  request.send();
  */

});