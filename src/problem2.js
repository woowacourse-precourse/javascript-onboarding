//#1
// 풀긴 풀었는데 시간이 너무 오래 걸렸다
// 맘대로 안풀려서 if문을 계속 추가하고 맞을때까지 계속 체크했는데 좋은것같진않다

function problem2(cryptogram) {
  var answer;
  let prev = "";
  let remainStr = cryptogram;
  let isEnd = false;

  //abcdeeffggg

  while (!isEnd) {
    // i-1과 i번째 문자를 비교

    // 이전의 상태가 같은 문자열을 가지고 있었는지 체크
    // 중복검사를 한번 할때마다 리턴하는 문자열을 임시 저장하는 변수
    let isSameStr = false;
    let buffer = "";

    // 중복검사 루프 시작
    for (let i = 0; i < remainStr.length; i++) {
      const current = remainStr[i];

      //첫번째 글자를 확인하는 경우, 이전문자에 값 저장만 하고 다음 인덱스 확인
      if (i === 0) {
        prev = current;
        continue;
      }

      // 이전(i-1)==현재(i)인 경우 상태를 바꿔준다
      if (prev === current) {
        isSameStr = true;
        continue;
      }

      // 마지막 조회인 경우, 상태값에 따라 다르게 처리
      // 이전까지 동일한 문자열 조회가 아닌 경우, prev, current 둘다 buffer에 추가, 아니라면 current만 추가
      if (i === remainStr.length - 1) {
        if (!isSameStr) buffer += prev;
        buffer += current;
        continue;
      }

      // prev != current이고 마지막 조회가 아닌 경우 prev값을 buffer에 넣고 상태 false 처리
      if (!isSameStr) buffer += prev;
      isSameStr = false;
      prev = current;
    }

    remainStr = buffer;

    //예외처리
    if (!remainStr.length) return "";

    //중복 문자열 지우고 남은 새로운 문자열에 중복이 있나 확인
    for (let j = 0; j < remainStr.length - 1; j++) {
      if (remainStr[j] === remainStr[j + 1]) {
        console.log("중복값있다", j);
        isEnd = false;
        break;
      } else {
        isEnd = true;
      }
    }

    prev = "";
  }

  answer = remainStr;
  return answer;
}

module.exports = problem2;
