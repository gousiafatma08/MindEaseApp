let selectedMood = "";
let selectedIssue = "";

function showScreen(id) {
  const screens = document.querySelectorAll(".screen");
  screens.forEach((s) => s.classList.remove("active"));

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  }
}

function selectMood(mood) {
  selectedMood = mood;
  alert("Mood selected: " + mood);
}

function selectIssue(issue) {
  selectedIssue = issue;
  alert("Issue selected: " + issue);
}
