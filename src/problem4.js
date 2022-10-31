//영어인지 판별하는 함수
const checkEng = (w, isEng) => {
  return isEng.test(w);
}

//대문자인지 판별하는 함수
const checkBig = (w) => {
  return w === w.toUpperCase();
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
    if (!checkEng(w, isEng)) {
      answer += w;
    } else {
      //대문자인지 소문자인지에 따라서 변경하여 answer에 붙이기
      if (checkBig(w)) {
        answer += alphabet[25 - alphabet.indexOf(w)];
      } else {
        answer += alphabet[25 - alphabet.indexOf(w.toUpperCase())].toLowerCase();
      }
    }
  }
  return answer;
}

module.exports = problem4;
