function problem3(number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    let count = check369(i);
    result += count;
  }
  return result;
}

// 3, 6, 9가 포함되어 있는지 검사하고, 포함된 갯수를 반환하는 함수
function check369(num) {
  let numArr = num.toString().split("");
  let count = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === "3" || numArr[i] === "6" || numArr[i] === "9") {
      count++;
    }
  }
  return count;
}

module.exports = problem3;
