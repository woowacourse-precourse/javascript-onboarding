function problem2(cryptogram) {
  let stack = [];
  var answer = "";

  //매개변수로 부터 하나씩 받기
  Array.from(cryptogram).forEach((v) => {
    // console.log(stack.length, stack[stack.length - 1], v);
    if (stack.length === 0) {
      // 비어있으면 추가
      stack.push(v);
      // console.log("if", stack);
    } else if (stack[stack.length - 1] === v) {
      //전과 후를 비교해 같으면 제거
      stack.pop();
      // console.log("else if", stack);
    } else {
      // 다르면 추가
      stack.push(v);
      // console.log("else", stack);
    }
  });
  answer = stack.join("");

  return answer;
}

// problem2("abbca");
module.exports = problem2;
