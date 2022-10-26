function problem1(pobi, crong) {
  let answer = 0;
  function findBiggest(arr) {
    let biggest = 0;
    const numToString = arr.map(x => x.toString().split(''))
    for (let numbers of numToString) {
      const stringToNum = numbers.map(x => parseInt(x))
      const summation = stringToNum.reduce((prevValue, currValue) => prevValue + currValue);
      const multiplication = stringToNum.reduce((prevValue, currValue) => prevValue * currValue);
      biggest = Math.max(summation, multiplication);
    }
    return biggest;
  }


  return answer;
}

module.exports = problem1;
