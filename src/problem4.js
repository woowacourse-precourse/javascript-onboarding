function problem4(word) {
  const lower = Array.from(Array(26))
    .map((e, i) => i + "a".charCodeAt(0))
    .map((e) => String.fromCharCode(e));
  const upper = Array.from(Array(26))
    .map((e, i) => i + "A".charCodeAt(0))
    .map((e) => String.fromCharCode(e));
  const alphaKeys = lower.concat(upper);
  const alphaValues = lower.reverse().concat(upper.reverse());

  const Decoder = new Map();
  for (let i = 0; i < 52; i++) {
    Decoder.set(alphaKeys[i], alphaValues[i]);
  }

  let res = "";
  for (let i = 0; i < word.length; i++) {
    if (Decoder.has(word[i])) res += Decoder.get(word[i]);
    else res += word[i];
  }
  return res;
}

module.exports = problem4;
