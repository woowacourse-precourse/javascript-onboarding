function problem2(cryptogram) {
  var answer;

  // 편의를 위해 들어오는 문자열을 배열로 변환
  const cryptoArr = [...cryptogram];

  // 더이상 중복이 발생하지 않을 때 까지 무한루프를 돈다.
  while (true) {
    //flag를 통해 중복값의 시작과 끝을 파악
    let flag = false;
    // 한바퀴 돌 때마다 cryptoArr에서 삭제시킬 인덱스(중복되는 문자열자리)가 들어올 배열
    const willRemoveIndex = [];

    for (let i = 1; i < cryptoArr.length; i++) {
      if (flag === false && cryptoArr[i - 1] === cryptoArr[i]) {
        flag = true;
        willRemoveIndex.push(i - 1);
        willRemoveIndex.push(i);
      } else if (flag === true && cryptoArr[i - 1] === cryptoArr[i]) {
        willRemoveIndex.push(i);
      } else if (flag === true && cryptoArr[i - 1] !== cryptoArr[i]) {
        flag = false;
      }
    }

    // 중복이 없으면 해당 while문 탈출
    if (willRemoveIndex.length === 0) break;

    // 중복된 값을 빼는 과정
    for (const num of willRemoveIndex) {
      cryptoArr[num] = 0;
    }
    for (let i = 0; i < cryptoArr.length; i++) {
      if (cryptoArr[i] === 0) {
        cryptoArr.splice(i, 1);
        i--;
      }
    }
  }

  answer = cryptoArr.join("");
  return answer;
}

module.exports = problem2;
