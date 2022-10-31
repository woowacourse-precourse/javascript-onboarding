function problem1(pobi, crong) {
  var answer;

  if(pobi[0] < 1 || pobi[1] > 400) return -1;
  if(crong[0] < 1 || crong[1] > 400) return -1;

  if(pobi[1] - pobi[0] !== 1) return -1;
  if(crong[1] - crong[0] !== 1) return -1;

  if(pobi[0] % 2 !== 1 || pobi[1] % 2 !== 0) return -1
  if(pobi[0] % 2 !== 1 || pobi[1] % 2 !== 0) return -1
   

const bigNum = (number) => {
  let sum = 0;
  let multiply = 1;
  while(number > 1) {
    sum += Math.floor(number % 10)
    multiply *= Math.floor(number % 10)
    number /= 10
  }
  return Math.max(sum, multiply)
}

const pobiBigNum = Math.max(bigNum(pobi[0]), bigNum(pobi[1]))
const crongBigNum = Math.max(bigNum(crong[0]), bigNum(crong[1]))
console.log(pobiBigNum, crongBigNum)

if(pobiBigNum > crongBigNum) {
  answer = 1
} else if (pobiBigNum < crongBigNum) {
  answer = 2
} else if (pobiBigNum === crongBigNum) {
  answer = 0
}
console.log(answer)
return answer;
}

module.exports = problem1;