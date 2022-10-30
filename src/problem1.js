function problem1(pobi, crong) {

}

function getAddResult(num) {
  let result = 0;
  while(num !== 0) {
    result += num % 10;
    num = Math.floor(num / 10);
  }

  return result;
}

module.exports = problem1;
