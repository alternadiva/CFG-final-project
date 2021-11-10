
function openMenu() {
    document.getElementById("menu").style.height = "90%";
  }
  
function closeMenu() {
    document.getElementById("menu").style.height = "0%";
  }

const openButton = document.getElementById("open-btn");
const closeButton = document.getElementById("close-btn");

openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);