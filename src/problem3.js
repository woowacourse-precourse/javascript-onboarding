function problem3(number) {
  // 1부터 number까지의 숫자를 하나의 문자열로 합한다.
  let str = "";

  let i = 1;
  while (i <= number) {
    str += i;
    i++;
  }

  // 문자열에 3,6,9의 개수를 구한다.
  let count = 0;
  for (const num of str) {
    if (num === "3" || num === "6" || num === "9") {
      count++;
    }
  }

  return count;
}

module.exports = problem3;
