function problem2(cryptogram) {
  let answer;
  answer = removeDuplicate(cryptogram);
  return answer;
}

function removeDuplicate(text) {
  // 빈 어레이 생성
  const arr = [];
  // for of를 사용해 반복문 생성

  for (const char of text) {
    if (char === arr[arr.length - 1]) {
      // 문자가 만약 이전에 push 된 문자라면 전에 넣었던 문자를 삭제
      arr.pop();
    } else {
      //어레이로 각각의 문자 넣기
      arr.push(char);
    }
  }
  return arr.join("");
}

module.exports = problem2;
