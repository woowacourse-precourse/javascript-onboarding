function clapCount(num) {
  let count = 0;

  String(num)
    .split("")
    .map((el) => {
      if (el === "3" || el === "6" || el === "9") {
        count++;
        return;
      }
    });

  return count;
}

function problem3(number) {
  const numberArr = Array.from(new Array(number), (_, k) => k + 1);
  const clapCountArr = numberArr.map((num) => clapCount(num));

  return clapCountArr.reduce((acc, cur) => acc + cur, 0);
}

module.exports = problem3;
