function problem1(pobi, crong) {
  let pobiValue = Math.max(sumArrayNumber(stringToNumberArray(pobi[0])), sumArrayNumber(stringToNumberArray(pobi[1])), multiplyArrayNumber(stringToNumberArray(pobi[0])), multiplyArrayNumber(stringToNumberArray(pobi[1])))
  let crongValue = Math.max(sumArrayNumber(stringToNumberArray(crong[0])), sumArrayNumber(stringToNumberArray(crong[1])), multiplyArrayNumber(stringToNumberArray(crong[0])), multiplyArrayNumber(stringToNumberArray(crong[1])))

  }
}
module.exports = problem1;

const stringToNumberArray = (n) => String(n).split('').map(char => Number(char));
const sumArrayNumber = (array) => array.reduce((prev, cur) => {return prev + cur}, 0);
const multiplyArrayNumber = (array) => array.reduce((prev, cur) => {return prev * cur}, 1);