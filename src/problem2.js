function problem2(cryptogram) {
  var answer;
  let setArr = [];

  for (let i = 0; i < cryptogram.length; i++) {
    //중복 되는 값이 없는 경우
    if (setArr[setArr.length - 1] !== cryptogram[i]) setArr.push(cryptogram[i]);
    else {
      // 중복되는 문자가 홀수일 경우
      if (setArr[setArr.length - 1] === cryptogram[i + 1]) i += 1;
      // 홀수 이후에도 연속된 문자일 경우 (짝수)
      if (cryptogram[i] === cryptogram[i + 1]) i += 1;
      // 중복되는 값이 있는 경우
      setArr.pop();
      // 중복된 문자가 하나인 경우 반복 종료
      if (setArr.length === 1) break;
    }
  }

  answer = setArr.join("");
  return answer;
}

module.exports = problem2;
