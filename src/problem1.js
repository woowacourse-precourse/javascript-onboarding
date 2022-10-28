function problem1(pobi, crong) {
  let answer;
  return answer;
}

function getAddedScore(pages) {
  return Math.max(
    String(pages[0])
      .split("")
      .reduce((acc, cur) => acc + +cur, 0),
    String(pages[1])
      .split("")
      .reduce((acc, cur) => acc + +cur, 0)
  );
}

console.log(problem1([97, 98], [197, 198]));
console.log(problem1([131, 132], [211, 212]));
console.log(problem1([99, 102], [211, 212]));

module.exports = problem1;
