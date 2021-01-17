let circles = document.querySelectorAll("[class *= circle-]");
let btn = document.querySelector(".share");

btn.addEventListener("click", animate);

let isOpen = false;
let start = 50;
function animate() {
  if (!isOpen) {
    btn.innerHTML = '<i class="fas fa-times"></i>';
    circles.forEach((circle, index) => {
      circle.style.transform = `translateY(-${start * (index + 1)}px)`;
    });
    isOpen = !isOpen;
  } else {
    btn.innerHTML = '<i class="fas fa-share-alt"></i>';
    circles.forEach((circle, index) => {
      circle.style.transform = `translateY(0px)`;
    });
    isOpen = !isOpen;
  }
}
