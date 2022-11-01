function problem1(pobi, crong) {
  var answer;
  const pobiWin = 1;
  const crongWin = 2;
  const draw = 0;
  const exception = -1

  if(pobi[0] < 1 || pobi[1] > 400) return exception;
  if(crong[0] < 1 || crong[1] > 400) return exception;

  if(pobi[1] - pobi[0] !== 1) return exception;
  if(crong[1] - crong[0] !== 1) return exception;

  if(pobi[0] % 2 !== 1 || pobi[1] % 2 !== 0) return exception;
  if(pobi[0] % 2 !== 1 || pobi[1] % 2 !== 0) return exception;
   

const bigNum = (number) => {
  let sum = 0;
  let multiply = 1;
  while(number > 1) {
    sum += Math.floor(number % 10)
    multiply *= Math.floor(number % 10)
    number /= 10;
  }
  return Math.max(sum, multiply)
}

const pobiBigNum = Math.max(bigNum(pobi[0]), bigNum(pobi[1]))
const crongBigNum = Math.max(bigNum(crong[0]), bigNum(crong[1]))

if(pobiBigNum > crongBigNum) {
  answer = pobiWin;
} else if (pobiBigNum < crongBigNum) {
  answer = crongWin;
} else if (pobiBigNum === crongBigNum) {
  answer = draw;
}
return answer;
}

module.exports = problem1;