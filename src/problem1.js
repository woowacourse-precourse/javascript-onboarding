function problem1(pobi, crong) {
  function getMaxNumber(num) {
    let arr = String(num).split("");
    let plus = arr.reduce((a, c) => {
      a = a + parseInt(c);
      return a;
    }, 0);
    let multiple = arr.reduce((a, c) => {
      a = a * +c;
      return a;
    }, 1);
    return Math.max(plus, multiple);
  }
}

module.exports = problem1;
