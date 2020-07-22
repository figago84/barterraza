function renderButtons() {
  var height = window.innerHeight;
  document.getElementsByClassName('loading')[0].style.height=height;
  document.querySelectorAll('.btn').forEach(function (element) {
    if (element.clientWidth < element.clientHeight)
      element.style.height = element.clientWidth + "px"
    else
      element.style.width = element.clientHeight + "px"
    // if (!element.className.includes("selected"))
    //   element.style.display = "none"
  });

  document.getElementsByClassName("top non-selected")[0].style.display = "none"
  if (document.getElementsByClassName("bottom non-selected").length > 0)
    document.getElementsByClassName("bottom non-selected")[0].style.display = "none"
  document.getElementsByClassName("loading")[0].style.display = "none"

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