function problem2(cryptogram) {
  var answer;
  let setArr = [];

  for (let i = 0; i < cryptogram.length; i++) {
    //중복 되는 값이 없는 경우
    if (setArr[setArr.length - 1] !== cryptogram[i]) {
      setArr.push(cryptogram[i]);
    } else {
      // 중복되는 값이 있는 경우
      setArr.pop();
    }
  }

  return answer;
}

module.exports = problem2;
