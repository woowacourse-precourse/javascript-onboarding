// 알파벳인지 확인하는 함수
function checkAlphabet(str) {
  const regExp = /[a-zA-Z]/g;
  if (regExp.test(str)) {
    return true;
  } else {
    return false;
  }
}

// 청개구리 사전대로 변환하는 함수
function reverseEng(n) {
  // 알파벳 a-z까지 출력
  const arrEng = Array.from({ length: 26 }, (value, index) =>
    String.fromCharCode(index + 97)
  );
  const arrEngRev = [...arrEng].reverse();

  const arrIndex = arrEng.forEach((value, index) => {
    if (n === value) {
      return index;
    }
  });

  return arrEng[index];
}

// main 함수
function problem4(word) {
  let answer;
  return answer;
}

module.exports = problem4;
