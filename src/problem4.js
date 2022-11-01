function problem4(word) {
  const frogDic = {};
  for (let A = 65, Z = 90, a = 97, z = 122; A <= 90; A++, a++, Z--, z--) {
    frogDic[String.fromCharCode(A)] = String.fromCharCode(Z);
    frogDic[String.fromCharCode(a)] = String.fromCharCode(z);
  }
  let answer = "";
  for (let i = 0; i < word.length; i++) {
    answer += frogDic[word[i]] || word[i];
  }

  return answer;
}

module.exports = problem4;
