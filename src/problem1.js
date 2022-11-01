function problem1(pobi, crong) {
  var answer;
  //예외 상황일 경우 -1을 return 
  if (
    pobi[0] % 2 != 1 ||
    pobi[1] % 2 != 0 ||
    pobi[0] + 1 != pobi[1] ||
    crong[0] % 2 != 1 ||
    crong[1] % 2 != 0 ||
    crong[0] + 1 != crong[1]
    ) {
    answer = -1;
    } 

  
  return answer;
}

module.exports = problem1;
