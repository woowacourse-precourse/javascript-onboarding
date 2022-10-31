function problem6(forms) {
  const result = new Set();

  forms.forEach((curr, i) => {
    const [currEmail, currNickname] = curr;
    forms.slice(i + 1).forEach((next, j) => {
      const [nextEmail, nextNickname] = next;
      const currSubStrings = subStringsLongerThan(2)(currNickname);
      const nextSubStrings = subStringsLongerThan(2)(nextNickname);

      const originalSubStringLen =
        currSubStrings.length + nextSubStrings.length;

      const set = new Set([...currSubStrings, ...nextSubStrings]);
      const newSubStringLen = set.size;
      if (originalSubStringLen !== newSubStringLen) {
        result.add(currEmail);
        result.add(nextEmail);
      }
    });
  });

  return [...result].sort((a, b) => a.localeCompare(b));
}

const subStringsLongerThan = (predicate) => (str) =>
  [...str].reduce((a, c, i) => {
    [...str].map((_, j) => {
      const subString = str.slice(i, j + 1);
      if (subString.length >= predicate) {
        a.push(subString);
      }
    });
    return a;
  }, []);

module.exports = problem6;
