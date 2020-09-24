// // const moonPath =
// //   "M44 83C44 128.287 78.8512 164.941 82 165C36.7127 165 0 128.287 0 83C0 37.7127 36.7127 0.999996 82 0.999996C90 -4 44 37.7127 44 83Z";

// // const sunPath =
// //   "M164 82C164 127.287 127.287 164 82 164C36.7127 164 0 127.287 0 82C0 36.7127 36.7127 0 82 0C127.287 0 164 36.7127 164 82Z";

// // anime({
// //   targets: ".sun",
// //   d: [
// //     { value: moonPath, delay: 1000 },
// //     { value: sunPath, delay: 1000 }
// //   ],
// //   easing: "easeOutQuad",
// //   duration: 2000,
// //   loop: true
// // });
// let nav = document.querySelector("nav");
// // console.log(nav);

// // console.log(document.body.scrollHeight);
// let height = document.body.scrollHeight;
// // console.log(height);

// let percent = height / 100;
// window.onscroll = function () {
//   //   console.log(Math.round(document.body.scrollTop));
//   //   console.log(document.body.scrollTop);
//   //   nav.style.width = document.body.scrollTop + "px";
//   //   console.log(nav.style.width);
// };

let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.setAttribute(
    "style",
    `top : ${e.pageY - 20}px; left : ${e.pageX - 20}px`
  );
});
