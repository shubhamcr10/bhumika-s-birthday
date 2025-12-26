const textLines = [
  "Hey...",
  "I made something special for you ❤️",
  "Just keep watching..."
];

const textEl = document.getElementById("text");
let index = 0;

function typeLine(line, i = 0) {
  if (i < line.length) {
    textEl.innerHTML += line.charAt(i);
    setTimeout(() => typeLine(line, i + 1), 50);
  } else {
    textEl.innerHTML += "<br><br>";
    index++;
    if (index < textLines.length) {
      setTimeout(() => typeLine(textLines[index]), 800);
    } else {
      setTimeout(showCake, 1500);
    }
  }
}

function showCake() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("cake-section").classList.remove("hidden");
}

typeLine(textLines[index]);

/* MODAL LOGIC */
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

document.querySelectorAll(".note").forEach(note => {
  note.onclick = () => {
    modalContent.innerText = note.dataset.text;
    modal.classList.remove("hidden");
  };
});

document.querySelectorAll(".photo").forEach(photo => {
  photo.onclick = () => {
    modalContent.innerHTML = `<img src="${photo.dataset.img}" width="300">`;
    modal.classList.remove("hidden");
  };
});

document.getElementById("close").onclick = () => {
  modal.classList.add("hidden");
};
