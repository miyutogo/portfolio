var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var search = form.querySelector("input[type=search]");
  search.value = "result: " + search.value;
  form.submit();
});