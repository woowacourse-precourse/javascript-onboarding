function problem2(cryptogram) {
  var answer;
  let stackArray = [];
  let top = -1;
  cryptogram.split("").map((x, index) => {
    if (stackArray[top] === cryptogram[index]) {
      top--;
      stackArray.pop(index);
    } else {
      top++;
      stackArray.push(x);
    }
    answer = stackArray.join("");
  });
  return answer;
}

module.exports = problem2;

// 기능 목록
// 1. 스택 배열에 임의의 문자열을 넣고, 같은 값이 들어올경우 삭제한다.
