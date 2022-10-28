function problem7(user, friends, visitors) {
  var answer;
  let friendScore = {}
  for (let i = 0; i<visitors.length; i++){
    if(visitors[i] in friendScore == false){
      friendScore[visitors[i]] = 1
    }
    else if (visitors[i] in friendScore == true){
      friendScore[visitors[i]]+=1
    }
  }
  return answer;
}
module.exports = problem7;
