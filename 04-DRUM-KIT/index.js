const createDiv = (texto) => {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = texto;
  div.id = texto;
  document.getElementById("container").appendChild(div);
};

const sounds = {
  'A': "boom",
  'S': "clap",
  'D': "hihat",
  'F': "kick",
  'G': "openhat",
  'H': "ride",
  'J': "snare",
  'K': "tink",
  'L': "tom",
};

const showDiv = () => Object.keys(sounds).forEach(createDiv);
const addEffect = (id) => document.getElementById(id).classList.add("active");
const removeEffect = (id) => document.getElementById(id).classList.remove("active");

const addLetter = (event) => {
    let letter = '';
    if(event.type == "click"){
        letter = event.target.id;
    }
    else if(event.type == "keydown"){
        letter = event.key.toUpperCase();
    }
    playSound(letter);
    
}
const sleep = async (milliseconds) => {
  await new Promise((resolve) => {
    return setTimeout(resolve, milliseconds);
  });
};
const playSound = async (event) => {
    if(!sounds[event]) return;
    addEffect(event);
    const audio = new Audio(`sounds/${sounds[event]}.wav`);
    audio.play();
    await sleep(300);
    removeEffect(event);

};

 showDiv(sounds);
 document.getElementById("container").addEventListener("click", addLetter);
document.addEventListener("keydown", addLetter);