function problem3(number) {
  var answer = 0;

  for(let i = 1; i<= number; i++){
    let s_number = String(i);
    for(let j = 0; j < s_number.length; j++){
      if(s_number.charAt(j) == "3" || s_number.charAt(j) == "6" || s_number.charAt(j) == "9"){
        answer++;
      }
    }
  }
  return answer;
}
module.exports = problem3;
