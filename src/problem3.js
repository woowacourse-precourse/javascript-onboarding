function problem3(number) {
  let answer = 0;
  let strNumber = "";
  for (let i=1; i<number+1; i++){
    strNumber = i.toString();
    for (let j=0; j<strNumber.length; j++){
      if (strNumber[j] === "3" || strNumber[j] === "6" || strNumber[j] === "9"){
        answer++;
      }
    }
  }
  return answer;
}
module.exports = problem3;
