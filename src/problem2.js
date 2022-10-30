function problem2(cryptogram) {
  var answer;
  let stack = [];
  let flag = false;
  // flag -  stack의 top에 해당되는 문자가 자신의 뒷자리에 중복 문자를 발견한 경우 flag에 true를 저장함
  // (true가 저장되어 있는 경우, 더 이상 현재 stack의 top 과 동일한 문자가 조회되지 않는 경우 현재의 top을 pop해줘야함. )

  for (i = 0; i < cryptogram.length; i++) {
    if (stack) {
      // stack에 원소가 있는 경우
      if (flag === true && stack.at(-1) !== cryptogram[i]) {
        // flag 값을 통해 현재 stack의 top은 중복 문자가 존재했었음을 확인 가능
        stack.pop(); // flag 가 true 이기에 top을 pop 해줘야함
        if (stack && stack.at(-1) === cryptogram[i]) {
          continue;
        } else {
          stack.push(cryptogram[i]);
          flag = false;
        }
      } else if (flag === false && stack.at(-1) !== cryptogram[i]) {
        // stack의 top이 현재 문자열과 다르고 flag false
        stack.push(cryptogram[i]);
      } else {
        // stack의 top과 현재 조회한 문자가 같을때, flag true로 이 사실을 기록.
        flag = true;
      }
    } else {
      // stack이 비어있는 경우
      stack.push(cryptogram[i]);
      flag = false;
    }
  }
  if (flag) {
    stack.pop();
  }
  answer = stack.join("");

  return answer;
}

module.exports = problem2;
