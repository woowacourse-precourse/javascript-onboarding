function problem2(cryptogram) {
  var answer;
  const text = cryptogram.trim().split("");

  for (let i = 0; i < text.length; ) {
     // 암호문의 연속된 두자리가 같다면, 두 문장 모두 삭제
  if (text[i] == text[i + 1]) {
  text.splice(i, 1);
  text.splice(i, 1);
  // 처음부터 다시 검사하기 위해 변수 초기화
  i = 0;
  } else {
    i++;
  }
  }
  console.log(`result = ${text}`);
  answer = text;
  return answer;
}

module.exports = problem2;
