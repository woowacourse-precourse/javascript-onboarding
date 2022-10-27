function problem6(forms) {
  const result = new Set();

  for (let i = 0; i < forms.length - 1; i++) {
    const [currEmail, currNickname] = forms[i];
    for (let j = i + 1; j < forms.length; j++) {
      const [nextEmail, nextNickname] = forms[j];
      const currSubStrings = getAllSubstrings(currNickname);
      const nextSubStrings = getAllSubstrings(nextNickname);
      const originalSubStringLen =
        currSubStrings.length + nextSubStrings.length;

      const set = new Set([...currSubStrings, ...nextSubStrings]);
      const newSubStringLen = set.size;
      if (originalSubStringLen !== newSubStringLen) {
        result.add(currEmail);
        result.add(nextEmail);
      }
    }
  }

  return [...result].sort((a, b) => a.localeCompare(b));
}

const getAllSubstrings = (str) => {
  var subStrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      const subString = str.slice(i, j);
      if (subString.length >= 2) {
        subStrings.push(str.slice(i, j));
      }
    }
  }
  return subStrings;
};

module.exports = problem6;
