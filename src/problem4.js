function problem4(word) {
  let answer = "";

  for (let c of word) {
    if (c === " ") answer += c;
    else if (c === c.toUpperCase()) {
      answer += String.fromCodePoint(
        "A".charCodeAt(0) + ("Z".charCodeAt(0) - c.charCodeAt(0))
      );
    } else {
      answer += String.fromCodePoint(
        "a".charCodeAt(0) + ("z".charCodeAt(0) - c.charCodeAt(0))
      );
    }
  }

  return answer;
}

module.exports = problem4;
