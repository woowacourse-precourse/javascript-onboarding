function problem1(pobi, crong) {
  var answer = 0;
  let p_number = 0;
  let c_number = 0;
  if (pobi[0] > 1 && crong[0] > 1 && pobi[1] < 400 && pobi[1] < 400){
    p_number = Math.max((pobi[0] + pobi[1]),(pobi[0] * pobi[1]));
    c_number = Math.max((crong[0] + crong[1]),(crong[0] * crong[1]));
    if (p_number > c_number) {
      answer = 1;
    }
    else if (p_number < c_number) {
      answer = 2;
    }
    else if (p_number === c_number) {
      answer = 0;
    }
    else {
      answer = -1;
    }
  }
  
  return answer;
}
module.exports = problem1;
