// 연속하는 중복 문자들을 삭제
function problem2(cryptogram) {
  const cryptogramArr = cryptogram.split('');
  const stack = [];
  let duplicatedChar = '';

  // 입력받은 문자열 길이만큼 순회
  for(let i=0; i<cryptogramArr.length; i++) {
    // 현재 중복된 문자와 검사하고 있는 문자가 같은 경우 (반복되는 문자가 3개 이상인 경우)
    if(duplicatedChar === cryptogramArr[i]) {
      continue;
    }
    // 스택의 최상단 요소가 검사하고 있는 문자와 다른 경우 (연속되지 않는 경우)
    else if(stack[stack.length - 1] !== cryptogramArr[i]) {
      stack.push(cryptogramArr[i]);
    }
    // 스택의 최상단 요소가 검사하고 있는 문자와 같은 경우 (문자가 2개 반복된 경우)
    else if(stack[stack.length - 1] === cryptogramArr[i]) {
      duplicatedChar = stack.pop();
    }
  }

  return stack.join('');
}

module.exports = problem2;
