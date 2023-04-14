const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
let intervalID = null;

const colorLight = (event) => {
  stopAutomatic();
  const color = event.target.id;
  if (color != "automatic") {
    setLight(color);
  } else {
    automatic();
  }
};

const automatic = () => {
  const colors = ["vermelho", "amarelo", "verde"];
  let i = 0;
  intervalID = setInterval(() => {
    setLight(colors[i]);
    i = i < 2 ? ++i : 0;
  }, 2000);
};
function setLight(color) {
  img.src = "img/" + color + ".png";
}
function stopAutomatic() {
  clearInterval(intervalID);
}

buttons.addEventListener("click", colorLight);
