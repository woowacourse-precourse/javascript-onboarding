function getScoreByVisitor(visitors) {
  let score = {};
  for (let i = 0; i < visitors.length; i++){
    if(visitors[i] in score == false){
      score[visitors[i]] = 1;
    }
    else{
      score[visitors[i]] += 1;
    }
  }
  return score;
}

function problem7(user, friends, visitors) {
  var answer;
  let friendScore = {};

  friendScore = getScoreByVisitor(visitors);

  return answer;
}

module.exports = problem7;
