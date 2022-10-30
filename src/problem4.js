function problem4(word) {
  const isInvalid = word.length < 1 || word.length > 1000;
  if (isInvalid) return;

  const answer = [];
  word.split("").forEach((v) => {
    const ascii = v.charCodeAt();

    // 155, 219
    if (ascii >= 65 && ascii <= 90)
      answer.push(String.fromCharCode(155 - ascii));
    else if (ascii >= 97 && ascii <= 122)
      answer.push(String.fromCharCode(219 - ascii));
    else answer.push(v);
  });

  return answer.join("");
}

module.exports = problem4;
