// string을 array로 바꿔주는 함수
function stringToArray(array) {
  return [...array];
}

// array의 중복을 검사하고 중복을 제거한 array를 반환하는 함수
function checkDupliate(cryptogram) {
  let cryptogramArray = stringToArray(cryptogram);
  let notDuplicateArray = [];
  let i = 0;

  for (; i < cryptogramArray.length; i++) {
    if (
      cryptogramArray[i] === notDuplicateArray[notDuplicateArray.length - 1]
    ) {
      notDuplicateArray.pop();
    } else if (
      cryptogramArray[i] !== notDuplicateArray[notDuplicateArray.length - 1]
    ) {
      notDuplicateArray.push(cryptogramArray[i]);
    }
  }

  return notDuplicateArray;
}

// 중복이 제거된 array를 string으로 바꿔줘 리턴하는 함수
function problem2(cryptogram) {
  const notDuplicateArray = checkDupliate(cryptogram);
  const answer = notDuplicateArray.join("");

  return answer;
}

module.exports = problem2;
