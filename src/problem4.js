function problem4(word) {
  let answer;
  answer = backwardAlpha(word);
  return answer;
}

function backwardAlpha(text) {
  //빈 array 생성
  const arr = [];
  //iterable text 반복
  for (let char of text) {
    // 현재 alphabet 의 dec 구하고 소문자 일 경우에는 65 90 사이에 대문자일 경우 97 122 사이에 있으므로 if문으로 구분
    let now = char.charCodeAt(0);
    if (now >= 65 && now <= 90) {
      //반대되는 숫자 구하기
      now = 65 + 90 - now;
    }
    if (now >= 97 && now <= 122) {
      //반대되는 숫자 구하기
      now = 97 + 122 - now;
    }
    //반대되는 값으로 다시 string 으로 변환후 array 에 넣기
    arr.push(String.fromCharCode(now));
  }
  return arr.join("");
}

module.exports = problem4;
