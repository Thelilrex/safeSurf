let add_el = document.getElementById("add");
let remove_el = document.getElementById("remove");
let add_field_el = document.getElementById("add_field");

function addURL(url) {
  if (url) {
    restrict.push(url);
  } else {
    console.log("Enter a valid URL");
  }
}
