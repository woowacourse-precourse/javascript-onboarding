/***
 * 아스키 코드에서 아이디어를 따와서
 * 사전을 저장하지 않고도 변환을 가능하게 하여 메모리 낭비를 방지하고자 하였음.
 * 조건(대문자, 소문자)별로 변환하는 로직을 고민하였고,
 * 고민의 결과 청개구리 사전의 짝지어져있는 대문자의 DecCode 총합은 155,
 * 소문자의 경우 219라는 규칙을 발견하였고, 이를 활용하여 변환되는 페어를 찾음.
 * @param word{string}
 * @returns {string}
 */
function problem4(word) {
  var answer = translation(word);
  return answer;
}

function translation(word) {
  const spellings = [...word];
  return spellings
    .reduce((acc, cur) => {
      acc.push(spellingTranslation(cur));
      return acc;
    }, [])
    .join("");
}

function spellingTranslation(spelling) {
  const spellingDecCode = decCodeConverter(spelling);
  if (spellingDecCode >= 65 && spellingDecCode <= 90) {
    return charCodeConverter(155 - spellingDecCode);
  } else if (spellingDecCode >= 97 && spellingDecCode <= 122) {
    return charCodeConverter(219 - spellingDecCode);
  } else {
    return spelling;
  }
}

/**
 * char Code를 DEC Code로 변환시켜줍니다.
 * @param charCode{string}
 */
function decCodeConverter(charCode) {
  return charCode.charCodeAt(0);
}

/**
 * dec Code를 CharCode로 변환시켜줍니다.
 * @param decCode{number}
 */
function charCodeConverter(decCode) {
  return String.fromCharCode(decCode);
}

module.exports = problem4;
