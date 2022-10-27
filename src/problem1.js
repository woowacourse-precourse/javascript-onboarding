function problem1(pobi, crong) {
  let answer = null

  if(pobi[0] % 2 !== 0 || pobi[1] % 2 !== 0 || 
    crong[0] % 2 !== 0 || crong[1] % 2 !== 0 ||
    pobi[0] + 1 !== pobi[1] ||
    crong[0] + 1 !== crong[1] ||
    pobi[0] > 399 || pobi[1] > 400 ||
    crong[0] > 399 || crong[1] > 400 ||
    pobi.length > 2 || crong.length > 2){
      return -1
  }

  return answer;
}

module.exports = problem1;
