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

  let x;
  for(l in arrEng) {
    if (n === arrEng[l]){
      x = l;
    }
  }

  return arrEngRev[x];
}

// 대소문자 구분하는 함수
function checkUppLow(k) {
  if (k === k.toUpperCase()) {
    return reverseEng(k.toLowerCase()).toUpperCase();
  } else if (k === k.toLowerCase()) {
    return reverseEng(k)
  }
}

// main 함수
function problem4(word) {
  let answer = "";
  for (i of word) {
    if (checkAlphabet(i) === false) {
      answer += i;
    } else if (checkAlphabet(i) === true) {
      answer += checkUppLow(i)
    }
  }
  return answer;
}

module.exports = problem4;
