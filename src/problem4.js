// 기능2
function asciiToStr(asciiNum) {
  let frogWord = "";
  for (let i = 0; i < asciiNum.length; i++) {
    frogWord += String.fromCharCode(asciiNum[i]);
  }
  return frogWord;
}
// 기능1-1
function chknTrans(asciiCode) {
  let num;
  if (asciiCode >= 97 && asciiCode <= 122) {
    //소문자
    num = 122 - asciiCode + 97;
  } else if (asciiCode >= 65 && asciiCode <= 90) {
    //대문자
    num = 90 - asciiCode + 65;
  } else {
    //띄어쓰기
    num = 32;
  }
  return num;
}

// 기능1
function greenFrogDic(word) {
  const asciiArr = [];
  for (let i = 0; i < word.length; i++) {
    let asciiCode = word.charCodeAt(i);
    asciiArr.push(chknTrans(asciiCode));
  }
  return asciiArr;
}

function problem4(word) {
  var answer;
  const asciiArr = greenFrogDic(word);
  answer = asciiToStr(asciiArr);

  return answer;
}

module.exports = problem4;

/* 기능 목록
아이디어:: 아스키코드를 이용한 청개구리 사전 구현(A->Z, B->Y,...Z->A)
1. 문자열을 아스키코드로 변환하여 배열에 저장하는 기능
  1-1. 대문자, 소문자, ' ' 구분하여 반대로 변환하는 기능 
2. 1에서 만든 배열에 아스키코드 원소를 다시 문자열로 바꾸는 기능
*/
