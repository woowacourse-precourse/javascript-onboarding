function problem2(cryptogram) {
  var answer;
  let array = separateString(cryptogram);

  while (true) {
    is_same = checkAndRemove(array);
    if (is_same == false) break;
  }

  // 배열을 문자열로 변환하기
  answer = array.join("");

  if (cryptogram === answer) {
    answer = "";
    return answer;
  }

  return answer;
}

// idx와 idx+1 비교 후
// 같으면 idx와 idx+1 삭제
// 같지않으면 return false;
function checkAndRemove(array) {
  let there_is_same = false;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      array.splice(i, 2);
      there_is_same = true;
      break;
    }
  }
  return there_is_same;
}

// 문자열을 배열로 변환
function separateString(string) {
  let array = string.split("");
  return array;
}

module.exports = problem2;
