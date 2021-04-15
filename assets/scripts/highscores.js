const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let highScoresCategory = document.getElementById('highScoresCategory');

showHighScores();

highScoresCategory.addEventListener('change', showHighScores);


function showHighScores(){
  highScoresList.innerHTML = highScores
  .map(score => {
    if(score.category === highScoresCategory.value){
      return `<li class="high-score">${score.name} - ${score.score}</li>`;
    }
  })
  .join("");
}

