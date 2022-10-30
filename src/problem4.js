function problem4(word) {
  var answer;
  const UPPERACODE = 65; //A 아스키 코드값
  const LOWERACODE = 97; //a 아스키 코드랎

  var asciiArr = []; //word를 청개구리 사전을 적용한 아스키코드로 변환한 배열
  var stringArr = []; //asciiArr를 문자로 변환한 배열

  for (var i = 0; i < word.length; i++) {
    var wordAscii = word.charCodeAt(i);
    //아스키 코드값의 차이를 활용

    if (wordAscii === 32) {
      //공백인 경우
      asciiArr.push(wordAscii);
    } else if (wordAscii < LOWERACODE) {
      //대문자인 경우
      asciiArr.push(wordAscii + (25 - (wordAscii - UPPERACODE) * 2));
    } else {
      //소문자인 경우
      asciiArr.push(wordAscii + (25 - (wordAscii - LOWERACODE) * 2));
    }
  }

  for (var j = 0; j < asciiArr.length; j++) {
    //아스키코드값을 문자로 변환 후 배열에 저장
    stringArr.push(String.fromCharCode(asciiArr[j]));
  }
  answer = stringArr.join(""); //배열을 문자열로 변환

  return answer;
}

module.exports = problem4;
