function renderButtons() {
  document.querySelectorAll('.btn').forEach(function(element) {
    element.style.width = element.clientHeight + "px"
  });

}