function problem2(cryptogram) {
  var answer;
  return answer;
}

//중복 문자 제거 함수
function deleteChar(str) {
  var result = '';
  for (var i = 0; i < str.length; i++) {
    if (i === str.length - 1 || str[i] !== str[i + 1]) {
      result += str[i];
    } else {
      i += 1;
    }
  }
  return result;
}

module.exports = problem2;
