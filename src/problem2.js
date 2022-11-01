function problem2(cryptogram) {
  let arr = cryptogram.split("");
  let checkedArr = checkOverlap(arr);
  let result = joinArr(checkedArr);
  return result;
}

// 조건을 확인하여 중복 문자를 삭제하고, 반환하는 함수
function checkOverlap(arr) {
  let i = 0;
  while (i !== arr.length) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);
      i = 0;
    } else {
      i++;
    }
  }
  return arr;
}

// 배열로 나누어진 문자열을 다시 합쳐서 반환하는 함수
function joinArr(arr) {
  return arr.join("");
}

module.exports = problem2;
