function problem2(cryptogram) {
  var answer;
  let setArr = [];

  for (let i = 0; i < cryptogram.length; i++) {
    //중복 되는 값이 없는 경우
    if (setArr[setArr.length - 1] !== cryptogram[i]) {
      setArr.push(cryptogram[i]);
    } else {
      //예외사항 : 중복되는 문자가 홀수일 경우
      if (setArr[setArr.length - 1] === cryptogram[i + 1]) {
        i += 1;
      }
      // 중복되는 값이 있는 경우
      setArr.pop();
    }
  }

  answer = setArr.join("");
  return answer;
}

module.exports = problem2;
