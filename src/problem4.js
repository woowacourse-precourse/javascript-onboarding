function problem4(word) {
  var answer;
  answer = [...word]
    .map((string) => {
      if (string.charCodeAt() === 32) {
        //공백 -> 공백
        return 32;
      }
      if (string.charCodeAt() <= 90) {
        // 대문자일 경우
        return 155 - string.charCodeAt();
      }
      //소문자일 경우
      return 219 - string.charCodeAt();
    })
    .map((num) => {
      return String.fromCharCode(num);
    })
    .join("");

  console.log(answer);
  return answer;
}

module.exports = problem4;
