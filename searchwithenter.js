var mysearchbar = document.getElementById("mysearch");

var searchbar1 = document.getElementById("mysearch");
var searchbar2 = document.getElementById("mysearchartist");

mysearchbar.addEventListener("keypress", function(event) {
  if(event.key === "Enter") {
    document.getElementById("searchButton").click();
  }
});

searchbar2.addEventListener("keypress", function(event) {
  if(event.key === "Enter") {
    document.getElementById("searchButton").click();
  }
});
