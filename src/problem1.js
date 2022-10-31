// function problem1(pobi, crong) {
//   var answer;
//   return answer;
// }

// module.exports = problem1;

function problem1(pobi, crong) {
  function sum(n) {
    return String(n)
      .split("")
      .reduce((tot, e) => tot + parseInt(e), 0);
  }

  function multiple(n) {
    return String(n)
      .split("")
      .reduce((acc, cur) => acc * cur);
  }

  function pobiOdd(pobi) {
    return sum(pobi[0]) >= multiple(pobi[0]) ? sum(pobi[0]) : multible(pobi[0]);
  }

  function pobiEven(pobi) {
    return sum(pobi[1]) >= multiple(pobi[1]) ? sum(pobi[1]) : multible(pobi[1]);
  }
  var answer;
  return answer;
  console.log(pobi[1]);
}

console.log(problem1([97, 98], [197, 198]));
module.exports = problem1;
