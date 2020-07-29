function myFunction() {
  var click = document.getElementById("click");
  var more = document.getElementById("more");
  var button = document.getElementById("button");

  if (click.style.display === "none") {
    click.style.display = "inline";
    button.innerHTML = "Read more";
    more.style.display = "none";
  } else {
    click.style.display = "none";
    button.innerHTML = "Read less";
    more.style.display = "inline";
  }
}