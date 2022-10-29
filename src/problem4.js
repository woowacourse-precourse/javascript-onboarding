function problem4(word) {
  var answer = [];
  for (var i = 0; i < word.length; i++) {
    if ("a" <= word[i] && word[i] <= "z") {
      answer.push(
        String.fromCharCode(
          "z".charCodeAt() + ("a".charCodeAt() - word[i].charCodeAt())
        )
      );
    } else if ("A" <= word[i] && word[i] <= "Z") {
      answer.push(
        String.fromCharCode(
          "Z".charCodeAt() + ("A".charCodeAt() - word[i].charCodeAt())
        )
      );
    } else {
      answer.push(word[i]);
    }
  }

  return answer.join("");
}

module.exports = problem4;
