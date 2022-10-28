function problem2(cryptogram) {
  // 결과를 담아줄 배열 선언
  const result = [];

  // 주어진 단어를 단어 하나씩 나누기
  const cryptoframWord = cryptogram.split('');

  // 반복문을 통해 배열을 순회하면서 중복된 단어가 있는 지 확인
  // 중복되지 않았다면 배열에 담아주기
  for (let i = 0; i <= cryptoframWord.length; i++) {
    if (result[result.length - 1] === cryptoframWord[i]) {
      result.pop();
    } else {
      result.push(cryptoframWord[i]);
    }
  }

  return result;
}

module.exports = problem2;
