function problem3(number) {
  // 1~number까지 순회 기능
  let numberArray = Array.from({ length: number }, (_, n) => n + 1);
  const countThreeSixNine = numberArray.map((n) => isIncludeThreeSixNine(n));
  const sum = countThreeSixNine.reduce((acc, cur) => acc + Number(cur), 0);
  return sum;
}

// 3,6,9 포함 판별 기능
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
