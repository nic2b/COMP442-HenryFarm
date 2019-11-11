// Google Maps API
// Username: ethanharvey98@gmail.com
// Password: Tonyboy123
function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(41.155857, -80.078392),
    zoom:15,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(41.155857, -80.078392)
  });
  marker.setMap(map); 
}