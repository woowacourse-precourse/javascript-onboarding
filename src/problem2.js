function problem2(cryptogram) {
  let crypto = cryptogram.split('');
  let answer = [];
  let stack = [];
  /*crypto[i]의 전 또는 후 값이 같다면 i를 삽입해준다.
  연속되는 문자의 인덱스를 저장하는 것.*/
  for (let i = 0; i < crypto.length; i++) {
    if (crypto[i] === crypto[i + 1] || crypto[i] === crypto[i - 1]) {
      stack.push(i);
    }
  }
  //stack에 저장되어 있는 인덱스는 answer에 추가해주지 않는다.
  for (i = 0; i < crypto.length; i++) {
    if (!stack.includes(i)) {
      answer.push(crypto[i]);
    }
  }
  //problem2의 파라미터와 결괏값이 다르다면 stack을 비우고, problem2에 answer를 넣어 다시 실행해준다.
  answer = answer.join('');
  if (cryptogram !== answer) {
    stack = [];
    return problem2(answer);
  } else {
    return answer;
  }
}
module.exports = problem2;
