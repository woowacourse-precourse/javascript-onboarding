function problem4(word) {
  const answer = converter(word);
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
  let resultValue;
  const wordArray = word.split("");
  const newArray = wordArray.map((i) => {
    return convertAlpha(i);
  });
  resultValue = newArray.join("");
  return resultValue;
};

const convertAlpha = (text) => {
  let resultValue;
  const isAlpha = checkAlpha(text);
  if (isAlpha) {
    resultValue = reverseAlpha(text);
  } else {
    resultValue = text;
  }

  return resultValue;
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
    //ASCII 97 ~ 122
    resultValue = reverse(text, 97, 122);
  } else {
    //ASCII 65 ~ 90
    resultValue = reverse(text, 65, 90);
  }

  return resultValue;
};

// reverseAlpha에서 반복되는 코드 함수화.
const reverse = (text, startIndex, endIndex) => {
  const charCode = text.charCodeAt(0);
  const index = charCode - startIndex;
  const resultValue = String.fromCharCode(endIndex - index);

  return resultValue;
};

//isLower함수를 그냥 reverseAlpha 내부에 구현하는게 오히려 효율적으로 보여서 지울까 고민. 허나, 가독성 측면에서 유지하기로 결정.
const isLower = (text) => {
  let resultValue;
  const charCode = text.charCodeAt(0);
  if (97 <= charCode && charCode <= 122) {
    resultValue = true;
  } else {
    resultValue = false;
  }

  return resultValue;
};
