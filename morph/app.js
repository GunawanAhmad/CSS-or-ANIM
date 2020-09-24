const moonPath =
  "M44 83C44 128.287 78.8512 164.941 82 165C36.7127 165 0 128.287 0 83C0 37.7127 36.7127 0.999996 82 0.999996C90 -4 44 37.7127 44 83Z";

const sunPath =
  "M164 82C164 127.287 127.287 164 82 164C36.7127 164 0 127.287 0 82C0 36.7127 36.7127 0 82 0C127.287 0 164 36.7127 164 82Z";

const darkMode = document.querySelector("#dark-mode");

let toggle = false;

darkMode.addEventListener("click", () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
  });
  timeline
    .add({
      targets: ".sun",
      d: [
        {
          value: toggle ? sunPath : moonPath
        }
      ]
    })
    .add(
      {
        targets: "#dark-mode",
        rotate: 320
      },
      "-= 350"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgba(255,255,255)" : "rgb(22,22,22)",
        color: toggle ? "rgb(0,0,0)" : "rgb(255,255,255)"
      },
      "-=500"
    );

  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
