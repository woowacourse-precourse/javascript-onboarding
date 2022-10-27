function problem1(pobi, crong) {


  function sum(n) {
    var result = String(n).split("").reduce((acc, cur) => Number(acc) + Number(cur), 0);
    return result;
  }

  function multiplication(n) {
    var result = String(n).split("").reduce((acc, cur) => Number(acc) * Number(cur), 1);
    return result;
  }

  function getMaxNum(left, right) {
    return Math.max(
      sum(left),
      sum(right),
      multiplication(left),
      multiplication(right)
    )
  }


}



module.exports = problem1;


