const instruments = ["Piano", "Guitar", "Violin", "Drums", "Saxophone", "Flute"];
const ul = document.getElementById("instrument-list");

for (const instrument of instruments) {
    const li = document.createElement("li");
    li.textContent = instrument;
    ul.appendChild(li);
}
