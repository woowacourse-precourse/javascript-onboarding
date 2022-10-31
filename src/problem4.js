function problem4(word) {
  const aplha = word.split("");

  let answer = aplha.map((r) => {
    const regex = /^[a-z|A-Z]/;
    if (!regex.test(r)) return r;
  });

  return answer.join("");
}

module.exports = problem4;
