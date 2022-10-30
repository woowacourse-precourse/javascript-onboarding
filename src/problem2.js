function problem2(cryptogram) {
  // 제한사항1: 다 소문자
  cryptogram = cryptogram.toLowerCase();
  // 제한사항2: 1000자 이하인 문자열
  cryptogram = cryptogram.slice(0, 1000);

  // 1. 배열을 만들고 answer가 없을땐 cryptogram[i]를 추가
  // 2. 추가된 것에 cryptogram[i]를 비교해서 안같으면 추가
  // 3. answer가 추가된 마지막 요소와 cryptogram의 마지막 요소가 같으면 없애기
  let answer = [];
  for (let i = 0; i < cryptogram.length; i++) {
    if (!answer.length || answer[answer.length - 1] !== cryptogram[i]) {
      answer.push(cryptogram[i]);
    } else if (answer[answer.length - 1] === cryptogram[i]) {
      answer.pop();
    }
  }
  return answer.join("");
}

module.exports = problem2;
