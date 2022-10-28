function problem6(forms) {
  var answer;
  let includenickname = []
  for (let i = 0; i<forms[0][1].length; i++){
    for (let j = 2; j<=forms[0][1].length; j++){
      if (j+i <= forms[0][1].length){
        includenickname.push(forms[0][1].substr(i,j))
      }
    }
  }
  return answer;
}
module.exports = problem6;
