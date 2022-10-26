function problem1(pobi, crong) {
  }
}
module.exports = problem1;

const stringToNumberArray = (n) => String(n).split('').map(char => Number(char));
const sumArrayNumber = (array) => array.reduce((prev, cur) => {return prev + cur}, 0);
const multiplyArrayNumber = (array) => array.reduce((prev, cur) => {return prev * cur}, 1);