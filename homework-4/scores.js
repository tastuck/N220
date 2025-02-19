const scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38];
constScoreUl = document.getElementById("score-list");
const avgParagraph = document.getElementById("average-score");

let total = 0;
for (const score of scores) {
    const li = document.createElement("li");
    li.textContent = score;
    scoreUl.appendChild(li);
    total += score; 
}