function problem2(cryptogram) {
  const answer = decode(cryptogram);
  console.log(answer);
  return answer;
}

/* 암호 해독 함수 */
/* 스택을 이용하여 중복된 문자 제거 */
/*  루프를 통해 모든 문자 순회
      스택이 비어있다면 문자 push
      비어있지 않다면 top과 현재 문자 비교
        같다면 top 문자 pop 
        다르다면 현재 문자 push
*/
function decode(cryptogram) {
  const stack = [];
  let isDup = false;
  for(let i = 0 ; i < cryptogram.length ; i++) {
    const current = cryptogram[i];
    if (isEmpty(stack)) stack.push(current);
    else {
      const top = stack.length-1;
      if (isEqual(current, stack[top])) {
        isDup = true;
      } else {
        if (isEqual(isDup, true)) {
          stack.pop();
          isDup = false;
          i--;
        } else {
          stack.push(current);
        }
      }
    }
    if (isEqual(isDup,true) && isEqual(i, cryptogram.length-1)) {
      stack.pop();
    }
  }
  return stack.join('');
}

problem2("zyellleyz");

function isEmpty(stack) {
  return stack.length === 0;
}

function isEqual(a, b) {
  return a === b;
}

module.exports = problem2;

/*
browoanoommnaon
*/