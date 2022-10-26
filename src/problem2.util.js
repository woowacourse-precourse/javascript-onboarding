// 입력값 체크 ( 1 ~ 1000 )
const checkInputError = (str) => str.length < 1 || str.length > 1000;

// 연속 중복 문자 제거
const deleteDuplicateWord = (str) => {
  let temp = str.split("");
  for (let i = 0; i < temp.length; i++) {
    const cur = str[i];
    for (let j = i + 1; j < temp.length; j++) {
      const next = str[j];
      if (cur === next) {
        temp[i] = "";
        temp[j] = "";
      } else {
        break;
      }
    }
  }
  return temp.join("");
};
// 재귀 호출

exports.checkInputError = checkInputError;
exports.deleteDuplicateWord = deleteDuplicateWord;
