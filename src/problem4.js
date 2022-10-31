function isValid(word) {
  if (word.length < 1 || word.length > 1000) {
    throw "1 이상 1,000 이하인 문자열을 입력해주세요";
  }
}

function reverseAlpha(alphabet) {
  const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowAlpha = "abcdefghijklmnopqrstuvwxyz";

  if (upperAlpha.includes(alphabet)) {
    const upperIndex = upperAlpha.indexOf(alphabet);
    return upperAlpha[upperAlpha.length - (upperIndex + 1)];
  } else if (lowAlpha.includes(alphabet)) {
    const lowerIndex = lowAlpha.indexOf(alphabet);
    return lowAlpha[lowAlpha.length - (lowerIndex + 1)];
  } else {
    return alphabet;
  }
}

function problem4(word) {
  let answer = "";

  isValid(word);
  return answer;
}

module.exports = problem4;
