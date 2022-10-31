function problem3(number) {
  const numberArray = Array.from({ length: number }, (_, n) => n + 1);
  const countThreeSixNine = numberArray.map((n) => isIncludeThreeSixNine(n));
  const sum = countThreeSixNine.reduce((total, num) => total + Number(num), 0);
  return sum;
}

function isIncludeThreeSixNine(number) {
  const numberToString = number.toString();
  let currentDigit = "";
  let count = 0;

  for (n of numberToString) {
    currentDigit = n;
    if (currentDigit === "3" || currentDigit === "6" || currentDigit === "9") {
      count += 1;
    }
  }
  return count;
}

module.exports = problem3;
