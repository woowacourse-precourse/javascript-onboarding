function problem2(cryptogram) {
  const engcheck = /^[a-z|A-Z]+$/;

  var answer;
  let n = cryptogram;
  let upperConfirm = n.toUpperCase();
  let stack = [];
  let cur;

  if (n.length > 1000) {
    //문자가 1000자 이하인지 확인
    return (answer = "1000자 이하의 문자를 입력해주세요.");
  } else if (!engcheck.test(n)) {
    // 알파벳을 입력했는지 확인
    return (answer = "알파벳을 입력해주세요");
  } else if (n === upperConfirm) {
    // 대문자인지 확인
    return (answer = "소문자로 입력해주세요.");
  }

  //cur값과 스택의 마지막 값을 비교해 중복되면 삭제하고 아니면 push한다
  for (cur of n) {
    if (cur === stack[stack.length - 1]) {
      stack.pop();
      continue;
    }
    stack.push(cur);
  }

  answer = stack.join("");
  return answer;
}

module.exports = problem2;
