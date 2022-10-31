// 연속되는 2자리 문자열 모두를 구하는 함수를 구현
// 타겟 대상의 중복 여부를 체크하는 함수 구현
// 결과 set을 정렬하는 함수 구현
// 구현된 함수를 이용하여 forms 각각의 중복을 체크하는 problem6 함수 구현

function makeCharCases(charCases, forms) {
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      const twoLengthChar = forms[i][1][j] + forms[i][1][j + 1];
      if (charCases[twoLengthChar] === undefined) {
        charCases[twoLengthChar] = 1;
      } else {
        charCases[twoLengthChar]++;
      }
    }
  }
}

function checkDuplicate(charCases, target) {
  for (let i = 0; i < target.length - 1; i++) {
    const twoLengthChar = target[i] + target[i + 1];
    if (
      charCases[twoLengthChar] !== undefined &&
      charCases[twoLengthChar] > 1
    ) {
      return true;
    }
  }
  return false;
}

function sortEmails(set) {
  const convertedArray = Array.from(set);
  convertedArray.sort();
  return convertedArray;
}

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
