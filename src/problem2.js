// 연속하는 중복 문자들을 삭제
function problem2(cryptogram) {
  const cryptoStr = cryptogram.split('');
  const stack = [];
  let duplicatedChar = '';

  for(let i=0; i<cryptoStr.length; i++) {
    if(duplicatedChar === cryptoStr[i]) {
      continue;
    }
    else if(stack[stack.length - 1] !== cryptoStr[i]) {
      stack.push(cryptoStr[i]);
    }
    else if(stack[stack.length - 1] === cryptoStr[i]) {
      duplicatedChar = stack.pop();
    }
  }

  return stack.join('');
}

module.exports = problem2;
