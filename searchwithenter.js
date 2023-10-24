var searchbar1 = document.getelementById("mysearch");
var searchbar2 = document.getElementById("mysearchartist");

searchbar1.addEventListener("keypress", function(event) {
  if(event.key === "Enter") {
    document.getElementById("searchButton").click();
  }
});

searchbar2.addEventListener("keypress", function(event) {
  if(event.key === "Enter") {
    document.getElementById("searchButton").click();
  }
});
