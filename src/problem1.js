function calAdd(number) {
  return number % 100 + (number / 10) % 10 + number % 10;
}
function calMul(number) {
  return (number % 100) * ((number / 10) % 10) * (number % 10);
}

function problem1(pobi, crong) {
  if(pobi[1] - pobi[0] !== 1 || pobi[0] % 2 !== 1 || pobi[0] < 2 || pobi[0] > 399) return -1
  if(crong[1] - crong[0] !== 1 || crong[0] % 2 !== 1 || crong[0] < 2 || crong[0] > 399) return -1

  const pobiMax = Math.max(calAdd(pobi[0]), calMul(pobi[0]), calAdd(pobi[1]), calMul(pobi[1]));
  const crongMax = Math.max(calAdd(crong[0]), calMul(crong[0]), calAdd(crong[1]), calMul(crong[1]));

  if(pobiMax > crongMax){
    return 1;
  } else if(pobiMax < crongMax){
    return 2;
  } else {
    return 0;
  }
}

module.exports = problem1;
