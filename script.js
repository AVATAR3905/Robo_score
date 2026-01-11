const ADMIN_PASSWORD = "robosoccer";

function getScores() {
  return JSON.parse(localStorage.getItem("scores")) || {};
}

function saveScores(scores) {
  localStorage.setItem("scores", JSON.stringify(scores));
}

function renderScores() {
  const table = document.getElementById("scoreTable");
  if (!table) return;

  const scores = getScores();
  table.innerHTML = "";

  for (let name in scores) {
    table.innerHTML += `
      <tr>
        <td>${name}</td>
        <td>${scores[name]}</td>
      </tr>`;
  }
}

function login() {
  const pwd = document.getElementById("password").value;
  if (pwd === ADMIN_PASSWORD) {
    document.getElementById("adminPanel").style.display = "block";
  } else {
    alert("Wrong password");
  }
}

function updateScore() {
  const name = document.getElementById("name").value;
  const goals = document.getElementById("goals").value;

  const scores = getScores();
  scores[name] = goals;
  saveScores(scores);

  alert("Score updated");
}
// Auto-refresh viewer page every 10 seconds
if (document.getElementById("scoreTable")) {
  renderScores();
  setInterval(renderScores, 10000); // 10 seconds
}

renderScores();
