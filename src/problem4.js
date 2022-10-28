function problem4(word) {
  var answer;
  return answer;
}

function makeBlueFrogDictionary() {
  const [charUpperA, charUpperZ, charLowerA, charLowerZ] = ['A', 'Z', 'a', 'z',].map(c => c.charCodeAt(0));

  const result = new Map();
  for (let i = 0; i < 26; i++) {
    result.set(
        String.fromCharCode(charUpperA + i),
        String.fromCharCode(charUpperZ - i),
    );
    result.set(
        String.fromCharCode(charLowerA + i),
        String.fromCharCode(charLowerZ - i),
    );
  }

  return result;
}

module.exports = problem4;
