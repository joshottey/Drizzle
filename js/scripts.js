let getLocation = () => {
  document.querySelector("#locationInput").value = "Hang on, searching...";
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let myLat = position.coords.latitude;
      let myLng = position.coords.longitude;
      document.querySelector("#locationInput").value = `Lat: ${myLat}, Lng: ${myLng}`;
    });
  } else document.querySelector("#locationInput").value = "Oops... Something went wrong.";
}

let searchLocation = () => {
  // no code here yet!
  document.querySelector("#dispData").innerHTML = "Ah, bummer! Nothing to see here yet.";
}

document.onreadystatechange = function () {
  /* From MDN: Using "interactive" because the document has finished loading and the document has been parsed but sub-resources such as images, stylesheets and frames are still loading. */
  if (document.readyState === "interactive") {
    document.querySelector("#myLoc").addEventListener("click", getLocation);
    document.querySelector("#searchLoc").addEventListener("click", searchLocation);
  }
}
