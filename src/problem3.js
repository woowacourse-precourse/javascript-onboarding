function problem3(number) {
  var answer = 0;
  var strNumber = "";
  for (var i=1; i<number+1; i++){
    strNumber = i.toString();
    for (var j=0; j<strNumber.length; j++){
      if (strNumber[j] === "3" || strNumber[j] === "6" || strNumber[j] === "9"){
        answer++;
      }
    }
  }
  return answer;
}
module.exports = problem3;
