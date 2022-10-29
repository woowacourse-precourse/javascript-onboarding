// 기능 목록
// 1. 문자열의 해당하는 배열에대하여 연속하는 중복문자열을 제거하는 함수 구현
// 2. while문으로 1번 함수의 input/output이 같아질때까지 반복
// 3. 배열을 문자열로 변환후 반환

// 연속하는 중복 배열 필터링
function removeOverlap(cryptogram) {
  const newArr = cryptogram.filter(
    (ele, idx, arr) => !(ele === arr[idx + 1] || ele === arr[idx - 1])
  );
  return newArr;
}

function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;
