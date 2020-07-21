function renderButtons() {
  document.querySelectorAll('.btn').forEach(function(element) {
    element.style.height = element.clientWidth + "px"
  });

}

function showMenu(menuName){
  menu = document.getElementsByClassName(menuName)[0];
  children = menu.children;
  length = menu.children.length;
  for (i=1; i < length; i++){
    if (children[i].children[0].style.visibility == "hidden" || children[i].children[0].style.visibility == '')
      children[i].children[0].style.visibility = "visible";
    else 
      children[i].children[0].style.visibility = "hidden";
  }
}