// test sample 추가
console.log(problem2("bronnaon"));

function problem2(cryptogram) {
  // empty stack 선언
  var stack = [];
  let arr = [...cryptogram]; // 배열로 할당

  // stack에 하나씩 push
  // 중복 없을 때까지 반복
  while (1) {
    stack.push(arr[0]);

    for (let i = 0; i < arr.length; i++) {
      // 연속하는 중복 문자 있으면 pop
      if (stack[i - 1] === arr[i]) {
        stack.pop();
      } else {
        stack.push(arr[i]);
      }
    }
  }
  return arr;
}

module.exports = problem2;
