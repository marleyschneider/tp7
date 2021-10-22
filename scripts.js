window.onload = function() {

  document.querySelector("#titleBanner h1").classList.add("tp6");

  document.querySelector("#Ingredients").onclick = function() {
    document.querySelector("#Ingredients ul").classList.toggle("showMe");
  }

  document.querySelector("#Equipment").onclick = function() {
    document.querySelector("#Equipment ul").classList.toggle("showMe");
  }

  document.querySelector("#Directions").onclick = function() {
    document.querySelector("#Directions ol").classList.toggle("showMe");
  }

  document.querySelector("#Directions").onclick = function() {
    document.querySelector("#Directions ol").classList.toggle("showMe");
  }

  document.querySelector("#titleBanner h1").onclick = function() {
    this.classList.toggle("tp6");
  }

  document.querySelector("#copyright").innerHTML += "<p><em>Recipe shown without permission from creator, my apologies!</em></p>";
} // end of window.onload