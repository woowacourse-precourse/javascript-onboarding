function problem4(word) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lower = "abcdefghijklmnopqrstuvwxyz".split("");
  const reverse_upper = [...upper].reverse();
  const reverse_lower = [...lower].reverse();
  var answer = "";
  const dict = {};

  for (let i = 0; i <= upper.length; i++) {
    const k1 = upper[i];
    const v1 = reverse_upper[i];
    const k2 = lower[i];
    const v2 = reverse_lower[i];
    dict[k1] = v1;
    dict[k2] = v2;
  }
  dict[" "] = " ";

  for (let i = 0; i <= lower.length; i++) {
    const k = lower[i];
    const v = reverse_lower[i];
    dict[k] = v;
  }

  for (let temp of word) {
    answer += dict[temp];
  }
  return answer;
}

module.exports = problem4;
