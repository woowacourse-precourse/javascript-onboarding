function problem4(word) {
  var answer;
  const alphabet_sm = new Array(26)
    .fill()
    .map((_, i) => String.fromCharCode(i + 97))
    .join(""); //a-z소문자 문자열
  const frog_sm = new Array(26)
    .fill()
    .map((_, i) => String.fromCharCode(122 - i))
    .join(""); //a-z개구리소문자 문자열
  const alphabet_cp = new Array(26)
    .fill()
    .map((_, i) => String.fromCharCode(i + 65))
    .join(""); //a-z대문자 문자열
  const frog_cp = new Array(26)
    .fill()
    .map((_, i) => String.fromCharCode(90 - i))
    .join(""); //a-z개구리대문자 문자열

  let word_arr = [];
  let decorded_arr = [];
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) < 122 && word.charCodeAt(i) > 91) {
      word_arr.push(alphabet_sm.search(word.charAt(i)));
      decorded_arr.push(frog_sm[word_arr[i]]);
    } else if (word.charCodeAt(i) > 64 && word.charCodeAt(i) < 91) {
      word_arr.push(alphabet_cp.search(word.charAt(i)));
      decorded_arr.push(frog_cp[word_arr[i]]);
    } else {
      word_arr.push(" ");
      decorded_arr.push(" ");
    }
    //word에 대응되는 index번호 찾고 해당 index로 frog에 대응되는 요소 찾기.
    // word가 대,소문자 일경우, 그외의 경우를 구분해 decord_arr에 해독문자 저장
  }

  answer = decorded_arr.join(""); //해독된 배열 문자열 변환

  return answer;
}

module.exports = problem4;
