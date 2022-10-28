// 문자에서 연속하는 중복 문자의 여부를 판단하는 기능
const isTextDuplicated = (text) => {
  const textArr = [...text];
  for (var i = 0; i < text.length - 1; i++) {
    if (textArr[i] != textArr[i + 1]) {
    } else {
      return false;
    }
  }
  return true;
};

function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;
