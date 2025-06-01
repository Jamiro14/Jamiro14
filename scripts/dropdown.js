function toggleNavigation() {
  var x = document.getElementById("myLinks");
  if (x.className === "nav-links") {
    x.className += " nav-responsive";
  } else {
    x.className = "nav-links";
  }
}
