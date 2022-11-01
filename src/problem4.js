function problem4(word) {
  var answer = "";
  const upper_first = 65,
    upper_end = 90,
    lower_first = 97,
    lower_end = 122;

  for (w of word) {
    let tmp = w.charCodeAt(0);
    let str_tmp = "";
    // console.log(w, tmp);

    // 소문자이면 소문자로
    if (tmp >= 97) {
      let index = lower_end - (tmp - lower_first);
      str_tmp = String.fromCharCode(index);
    } else if (tmp == 32) {
      //공백처리
      str_tmp = String.fromCharCode(tmp);
    } else {
      //대문자로
      let index = upper_end - (tmp - upper_first);
      str_tmp = String.fromCharCode(index);
    }
    answer = answer + str_tmp;
  }
  // console.log(answer);
  return answer;
}

module.exports = problem4;
