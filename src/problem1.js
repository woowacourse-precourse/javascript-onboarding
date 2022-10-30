function problem1(pobi, crong) {
  if(pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1){
      return -1;
  }
  else if(pobi[0] % 2 === 0 || crong[0] % 2 === 0){
      return -1;
  }
  else if(pobi[1] % 2 === 1 || crong[1] % 2 === 1){
      return -1;
  }
}
module.exports = problem1;
