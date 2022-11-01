function problem4(word) {
  var answer = word.split("").reduce((accu, curr) => {
    var tmp = " ";
    if (curr != " ") {
      tmp = curr.charCodeAt(0);
      if (tmp > 96) {
        tmp = String.fromCharCode(122 - tmp + 97);
      } else {
        tmp = String.fromCharCode(90 - tmp + 65);
      }
    }
    return accu + tmp;
  }, "");
  return answer;
}

module.exports = problem4;
