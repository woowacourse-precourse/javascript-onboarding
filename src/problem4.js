function problem4(word) {
  var answer = [];
  var str_arr = word.split("");
  var alph_b = [];
  var alph_s = [];
  // index -65
  for (var i = 65; i < 91; i++) alph_b.push(String.fromCharCode(i));
  alph_b.reverse();
  // index -97
  for (var i = 97; i < 123; i++) alph_s.push(String.fromCharCode(i));
  alph_s.reverse();
  // transform
  for (var i = 0; i < str_arr.length; i++) {
    var temp = str_arr[i].charCodeAt(0);
    if (97 <= temp && temp <= 122) answer.push(alph_s[temp - 97]);
    else if (65 <= temp && temp <= 90) answer.push(alph_b[temp - 65]);
    else answer.push(" ");
  }
  return answer.join("");
}

module.exports = problem4;
