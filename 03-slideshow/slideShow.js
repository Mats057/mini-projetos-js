const container = document.getElementById("container-items");
const images = [
  { id: 1, url: "./img/gta1.jpg", title: "Imagem do jogo GTA V" },
  { id: 2, url: "./img/gta2.jpg", title: "Imagem do jogo GTA V" },
  { id: 3, url: "./img/rdr1.jpg", title: "Imagem do jogo Red Dead Redemption 2" },
  { id: 4, url: "./img/rdr2.jpg", title: "Imagem do jogo Red Dead Redemption 2" },
  { id: 5, url: "./img/spider1.jpg", title: "Imagem do jogo Spider-Man" },
  { id: 6, url: "./img/spider2.jpg", title: "Imagem do jogo Spider-Man" },
];

const loadImages = (images, container) => {
  container.innerHTML = images
    .map(
      ({ url, title }) =>
        `<div class="item"><img src="${url}" alt="${title}"></div>`
    )
    .join("");
};

loadImages(images, container);

let items = document.querySelectorAll(".item");

const prev = () => {
  container.appendChild(items[0]);
  items = document.querySelectorAll(".item");
};

const next = () => {
  container.insertBefore(items[items.length - 1], items[0]);
  items = document.querySelectorAll(".item");
};

document.getElementById("next").addEventListener("click", next);
document.getElementById("prev").addEventListener("click", prev);
