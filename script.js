
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

function inviteHer() {
  window.open('mailto:?subject=I think you should get coding&body=We need more women in tech - I think you should check out #getHerCoding for more information: https://alternadiva.github.io/get-her-coding/')
}
