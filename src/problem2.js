function problem2(cryptogram) {
  var answer;
  const arr = cryptogram.split("");

  // 반복되는 문자열 존재하는지 check
  let check = true;
  while (check) {
    // 반복되는 문자가 없을 시 false 유지 후 반복문 탈출
    check = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i, 2);
        // 반복되는 문자가 있을 시 true로 변환. 이후 반복
        check = true;
      }
    }
  }
  // 반복 제거된 배열의 요소들 answer에 append
  answer = arr.join("");
  return answer;
}

module.exports = problem2;
