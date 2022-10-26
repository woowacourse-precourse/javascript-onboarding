/**
 * 대문자 알파벳을 문제 규칙에 맞춰 다른 대문자 알파벳으로 변환시켜주는 함수
 * @param {number} oneWordASCII 쪼개진 문자열 중 하나의 문자를 아스키 코드 번호로 변환한 값
 * @param {array} ans 변환된 문자열을 담은 배열
 */
function changeUpper(oneWordASCII, ans) {
  // 대문자는 대문자로 변경
  const newWordASCII = 90 - (oneWordASCII - 65);

  const newWord = String.fromCharCode(newWordASCII);

  ans.push(newWord);
}

/**
 * 소문자 알파벳을 문제 규칙에 맞춰 다른 소문자 알파벳으로 변환시켜주는 함수
 * @param {number} oneWordASCII 쪼개진 문자열 중 하나의 문자를 아스키 코드 번호로 변환한 값
 * @param {array} ans 변환된 문자열을 담은 배열
 */
function changeLower(oneWordASCII, ans) {
  // 소문자는 소문자로 변경
  const newWordASCII = 122 - (oneWordASCII - 97);

  const newWord = String.fromCharCode(newWordASCII);

  ans.push(newWord);
}

/**
 * 입력된 문자를 대문자, 소문자인 경우에 따라 규칙에 맞게 변환시켜주는 함수
 * @param {string} oneWordASCII 쪼개진 문자열 중 하나의 문자를 아스키 코드 번호로 변환한 값
 * @param {*} ans 변환된 문자열을 담은 배열
 */
function checkUpperOrLower(oneWordASCII, ans) {
  if (oneWordASCII >= 65 && oneWordASCII <= 90) {
    changeUpper(oneWordASCII, ans);
  } else if (oneWordASCII >= 97 && oneWordASCII <= 122) {
    changeLower(oneWordASCII, ans);
  }
}

/**
 * 공백 문자열을 판단하여 변환없이 그대로 정답 배열에 넣어주는 함수
 * @param {array} ans 변환된 문자열을 담을 배열
 * @param {string} word 쪼갠 문자열 중 하나의 문자
 */
function checkSpaceBar(ans, word) {
  if (word === " ") {
    ans.push(word);
  }
}

function problem4(word) {
  let wordArr = word.split("");

  let ans = [];

  for (let i = 0; i < wordArr.length; i++) {
    checkSpaceBar(ans, wordArr[i]);

    const oneWordASCII = wordArr[i].charCodeAt();

    checkUpperOrLower(oneWordASCII, ans);
  }

  return ans.join("");
}

module.exports = problem4;
