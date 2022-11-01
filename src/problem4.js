function problem4(word) {
  var answer = "";
  for (var i in word) {
    if (word[i] == " ") {
      answer += " ";
    } else if ("A" <= word[i] && word[i] <= "Z") {
      answer += check_upper(word[i]);
    } else {
      answer += check_lower(word[i]);
    }
  }
  return answer;
}

function check_upper(cha) {
  distance = cha.charCodeAt() - 65;
  return String.fromCharCode(90 - distance);
}
function check_lower(cha) {
  distance = cha.charCodeAt() - 97;
  return String.fromCharCode(122 - distance);
}
module.exports = problem4;
