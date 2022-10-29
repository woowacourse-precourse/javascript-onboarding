function problem1(pobi, crong) {
  var answer;

  if(pobi[0] % 2 === 0 || crong[0] % 2 === 0 || pobi[1] - pobi[0] != 1 || crong[1] - crong[0] != 1 ||
     pobi[0] === 1 || crong[0] === 1 || pobi[1] === 400 || crong[1] === 400) {
    return -1
  }
  
  return answer;
}

module.exports = problem1;
