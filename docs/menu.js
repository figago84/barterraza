function renderButtons() {
  document.querySelectorAll('.btn').forEach(function (element) {
    element.style.height = element.clientWidth + "px"
    // if (!element.className.includes("selected"))
    //   element.style.display = "none"
  });

  document.getElementsByClassName("top non-selected")[0].style.display = "none"
  document.getElementsByClassName("bottom non-selected")[0].style.display = "none"

}

function showMenu(menuName) {

  menu = document.getElementsByClassName(menuName + " non-selected")[0];
  if (menu.style.display == "none" || menu.style.display == '')
    menu.style.display = "block";
  else
    menu.style.display = "none";
  // children = menu.children;
  // length = menu.children.length;
  // for (i=1; i < length; i++){

  //    if (children[i].children[0].style.display == "none" || children[i].children[0].style.display == '')
  //      children[i].children[0].style.display = "flex";
  //    else 
  //      children[i].children[0].style.display = "none";
  // }
}

function goTo(site) {
  location.href = "https://figago84.github.io/barterraza/" + site + ".html"
}