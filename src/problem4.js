//영어인지 판별하는 함수
const checkEng = (w, isEng) => {
  return isEng.test(w);
}

function problem4(word) {
  let answer = "";
  const isEng = /[a-zA-Z]/;
  const alphabet = [
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y',
    'Z'
  ];
  for (let w of word) {
    //영어인지 판별하기
    if (!checkEng(w)) {
      answer += w
    }
  }
  return answer;
}

module.exports = problem4;
