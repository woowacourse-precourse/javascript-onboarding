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

// 연속하는 중복 문자를 삭제하는 기능
const deleteDuplicatedText = (text) => {
  const textArr = [...text];
  var leftIndex = 0;
  var rightIndex = 0;
  maxLength = textArr.length;
  for (leftIndex; leftIndex < maxLength - 1; leftIndex++) {
    rightIndex = leftIndex + 1;
    if (textArr[leftIndex] != textArr[rightIndex]) {
      continue;
    } else {
      count = 1;
      while (textArr[rightIndex] == textArr[leftIndex]) {
        rightIndex += 1;
        count++;
      }
      textArr.splice(leftIndex, count);
      maxLength = textArr.length;
    }
  }
  return textArr;
};
function problem2(cryptogram) {
  var answer;

  return answer;
}

module.exports = problem2;
