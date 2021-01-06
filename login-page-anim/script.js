const switchBtn = document.querySelector(".switch");
const welcome = document.querySelector(".welcome");
const form = document.querySelector(".form");
const particle = document.querySelector(".particle");
console.log(form);

welcomeWidth = welcome.clientWidth;
formWidth = form.clientWidth;

let isLogin = false;

switchBtn.addEventListener("click", () => {
  if (!isLogin) {
    welcome.style.transform = `translate(${formWidth}px)`;
    form.style.transform = `translate(-${welcomeWidth}px)`;
    welcome.querySelector("h1").classList.add("hide");
    form.querySelector("h1").classList.add("hide");
    particle.style.transform = "translate(50px)";

    setTimeout(() => {
      form.querySelector(".name").style.height = "0px";
      form.querySelector("h1").innerText = "Sign in";
      form.querySelector("button").innerText = "SIGN IN";
      welcome.querySelector("button").innerText = "SIGN UP";
      welcome.querySelector("h1").innerText = "Hello !";

      welcome.querySelector("h1").classList.remove("hide");
      form.querySelector("h1").classList.remove("hide");
    }, 300);

    isLogin = true;
  } else {
    welcome.style.transform = `translate(0px)`;
    form.style.transform = `translate(0px)`;
    welcome.querySelector("h1").classList.add("hide");
    form.querySelector("h1").classList.add("hide");
    particle.style.transform = "translate(0px)";
    // particle.style.transform = "transition(0px)";

    setTimeout(() => {
      form.querySelector(".name").style.height = "4rem";
      form.querySelector("h1").innerText = "Create account";
      form.querySelector("button").innerText = "SIGN UP";
      welcome.querySelector("button").innerText = "SIGN IN";
      welcome.querySelector("h1").innerText = "Welcome back !";

      form.querySelector("h1").classList.remove("hide");
      welcome.querySelector("h1").classList.remove("hide");
    }, 300);

    isLogin = false;
  }
});
