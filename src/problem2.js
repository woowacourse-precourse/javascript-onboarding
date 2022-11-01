function problem2(cryptogram) {
  var answer;

  const stack = [cryptogram[0]];
  let top = stack[0];
  let previous = '';

  for (let i = 1; i < cryptogram.length; i++) {
    const alphabet = cryptogram[i];

    if (top !== alphabet) {
      stack.push(alphabet);
      top = alphabet;
      continue;
    }

    if (previous === alphabet) continue; //2개 이상이 연속되는 경우

    previous = stack.pop();
    if (stack.length) top = stack[stack.length - 1]; //스택이 비어있게 되는 경우 예외처리
  }

  answer = stack.join('');

  return answer;
}

module.exports = problem2;
