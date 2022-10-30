function problem4(word) {
  let answer = "";
  let dic = {};

  for (let i = 0; i < 26; i++) {
    dic[String.fromCharCode("A".charCodeAt(0) + i)] = String.fromCharCode(
      "Z".charCodeAt(0) - i
    );
    dic[String.fromCharCode("a".charCodeAt(0) + i)] = String.fromCharCode(
      "z".charCodeAt(0) - i
    );
  }

  [...word].forEach((w) => {
    answer += w === " " ? " " : dic[w];
  });

  return answer;
}

module.exports = problem4;
