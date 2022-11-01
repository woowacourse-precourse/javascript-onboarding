function problem2(cryptogram) {
  var answer;

  const text = cryptogram.trim().split("");

  // 함수형으로 refactoring하여 재사용이 가능하도록 하고, 코드의 반복을 방지한다.
  answer = convertText(text);

  return answer;
}

function convertText(cryptogram) {
  let answer = "";

  for (let i = 0; i < cryptogram.length; ) {
    // 암호문의 연속된 두자리가 같다면, 두 문장 모두 삭제
    if (cryptogram[i] == cryptogram[i + 1]) {
      cryptogram.splice(i, 1);
      cryptogram.splice(i, 1);
      // i를 0으로 초기화 후 다시 검사
      i = 0;
    } else {
      i++;
    }
  }

  cryptogram.forEach((i) => (answer += i));

  return answer;
}
module.exports = problem2;
