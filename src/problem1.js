function problem1(pobi, crong) {
  
  if(pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;
  
  const maxPobi = Math.max(...pobi.map(num => findMaxScore(num)));
  const maxCrong = Math.max(...crong.map(num => findMaxScore(num)));

    if(maxPobi > maxCrong) {
      return 1;
    } else if(maxCrong > maxPobi) {
      return 2;
    } else if(maxPobi === maxCrong) {
      return 0;
    }
  
  return -1;
}

function findMaxScore(num) {
  const arr = Array.from(String(num));
  const plus = arr.reduce((acc, cur) => acc + +cur, 0)
  const mul = arr.reduce((acc, cur) => acc * +cur, 1)
  return Math.max(plus, mul)
}


  module.exports = problem1;