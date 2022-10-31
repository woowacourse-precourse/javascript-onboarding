//부분 문자열을 반환하는 함수
function subsets(string) {
  let arr = [];
  for (let i = 0; i < string.length - 1; i++) {
    arr.push(string.substring(i, i + 2));
  }
  return arr;
}

//중복된 부분문자열을 찾는 함수
function FindDuplicates(arry) {
  return [
    ...new Set(arry.filter((item, index, arr) => arr.indexOf(item) !== index)),
  ];
}

//중복된 부분문자열을 가지고 있는 이름 찾는 함수
function isInclued(arr, string) {
  return arr.some((str) => string.includes(str));
}

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
