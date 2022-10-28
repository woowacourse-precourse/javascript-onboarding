function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;

/*
 1. word를 배열로 split
 2. map을 이용해 각 문자를 convert.
    1) 아스키코드로 변환.
    2) lowerCase, upperCase, exception(그대로 return) 분류.
    3) 인덱스 반대로 치환.
    4) return
 3. Array.join("") 후, return.
*/

const converter = (word) => {
  const wordArray = word.split("");
  wordArray.map((i) => {
    let returnValue;
    const isAlpha = checkAlpha(i);
    if (isAlpha) {
      returnValue = reverseAlpha(i); //인덱스 반대로
    } else {
      returnValue = i;
    }

    return returnValue;
  });
  //대소문자 체크 i;
};

const checkAlpha = (text) => {
  let resultValue;
  const rAlpha = /[a-zA-Z]/g;
  if (text.match(rAlpha)) {
    resultValue = true;
  } else {
    resultValue = false;
  }

  return resultValue;
};

const reverseAlpha = (text) => {
  let resultValue;
  const isLowerCase = isLower(text);
  if (isLowerCase) {
    //lowerCase
  } else {
    //upperCase
  }
};

const isLower = (text) => {
  let resultValue;
  const charCode = text.charCodeAt(0);
  if (97 <= charCode <= 122) {
    resultValue = true;
  } else {
    resultValue = false;
  }

  return resultValue;
};

/*
대문자 : 65 ~ 90 -> 0 ~ 25
소문자 : 97 ~ 122 -> 0 ~ 25
else : return

*/
