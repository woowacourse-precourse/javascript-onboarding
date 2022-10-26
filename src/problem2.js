/**
 * 암호문에서 연속으로 이어지는 문자들을 지운 결과를 반환하는 함수
 * @param {array} stack 스택 구조를 활용하기 위한 빈 배열
 * @param {array} cryptoArr 암호를 쪼개서 배열로 변환한 것
 * @returns 최종적으로 스택에 남아있는 문자열들을 합쳐서 반환
 */
function compareStackWithCrypto(stack, cryptoArr) {
  for (let crypto of cryptoArr) {
    if (crypto === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(crypto);
    }
  }

  return stack.join("");
}

function problem2(cryptogram) {
  // 스택 구조 활용?
  // 스택에 하나씩 담음
  // 스택 가장 위에 있는 값과 현재 담으려는 값이 같다면
  // 스택에서 그 값을 뺀다.
  // 그게 아니라면 스택에 넣는다
  // 그런데 원본 배열로 연산하면 길이가 변하므로 웬만하면 건드리지말자.
  let stack = [];

  let cryptoArr = cryptogram.split("");

  const ans = compareStackWithCrypto(stack, cryptoArr);

  return ans;
}

module.exports = problem2;
