function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityInput = document.querySelector("#nameCity");
  cityInput.innerHTML = searchInput.value;
}

let weatherSearchForm = document.querySelector("#search-form");
weatherSearchForm.addEventListener("Submit", handleSearchSubmit);
