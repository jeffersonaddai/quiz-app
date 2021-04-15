const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let highScoresCategory = document.getElementById('highScoresCategory');
const reset = document.getElementById("reset");
showHighScores();

highScoresCategory.addEventListener('change', showHighScores);
reset.addEventListener('click', resetFn)

function resetFn(){
  localStorage.clear();
  showHighScores();
}
function showHighScores(){
  if(highScores.length > 0){
    highScoresList.innerHTML = highScores
    .map(score => {
      if(score.category === highScoresCategory.value){
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
      }
    })
    .join("");
  }else{
    highScoresList.innerHTML = '<li class="high-score">No scores Available</li>';
  }
}

