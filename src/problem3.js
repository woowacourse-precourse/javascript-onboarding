function countOf369(number) {
  return number
    .toString()
    .split("")
    .reduce((acc, cur) => {
      const num = parseInt(cur);
      return acc + (num % 3 === 0 && num !== 0 ? 1 : 0);
    }, 0);
}

function problem3(number) {
  return number;
}

module.exports = problem3;
