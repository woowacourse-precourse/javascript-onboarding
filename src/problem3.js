function problem3(number) {
  // 1. 1 ~ number까지 도는 반복문
  // 2. 369를 검사하는 함수를 호출하고, 반환값을 저장할 변수
  // 3. 반환된 값을 모두 더할 변수 (리턴할 변수)
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
