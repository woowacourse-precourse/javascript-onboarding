function problem1(pobi, crong) {
  if (pobi[1]-pobi[0] !==1 || pobi[0] % 2 ==0 || crong[1]-crong[0] !==1 || crong[0] % 2 ==0){
    return -1;
  }
  
  let pobiValue = Math.max(sumArrayNumber(stringToNumberArray(pobi[0])), sumArrayNumber(stringToNumberArray(pobi[1])), multiplyArrayNumber(stringToNumberArray(pobi[0])), multiplyArrayNumber(stringToNumberArray(pobi[1])))
  let crongValue = Math.max(sumArrayNumber(stringToNumberArray(crong[0])), sumArrayNumber(stringToNumberArray(crong[1])), multiplyArrayNumber(stringToNumberArray(crong[0])), multiplyArrayNumber(stringToNumberArray(crong[1])))

  if (pobiValue > crongValue){
    return 1;
  }
  if (pobiValue == crongValue){
    return 0;
  }
  if (pobiValue < crongValue){
    return 2;
  }
}
module.exports = problem1;

const stringToNumberArray = (n) => String(n).split('').map(char => Number(char));
const sumArrayNumber = (array) => array.reduce((prev, cur) => {return prev + cur}, 0);
const multiplyArrayNumber = (array) => array.reduce((prev, cur) => {return prev * cur}, 1);