function problem1(pobi, crong) {
  let answer;
  if (pobi[1] !== (pobi[0] + 1) || crong[1] !== (crong[0] + 1)) {
    answer = -1;
    return answer;
  } 
  
  if (pobi[0] % 2 === 0 || pobi[1] % 2 === 1 || crong[0] % 2 === 0 || pobi[1] % 22 === 1) {
    answer = -1;
    return answer;
  }

  answer = 1;
  return answer;
}

module.exports = problem1;


console.log(problem1([1, 2] , [6, 4]));