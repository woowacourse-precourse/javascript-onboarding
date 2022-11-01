const groupCharByN = (str = "", n = 0) => {
  if (str.length <= n) return [str];
  const res = [];
  for (let i = 0; i <= str.length - n; i++) {
    res.push(str.slice(i, i + n));
  }
  return res;
};

const removeDuplicates = (arr) => [...new Set(arr)];

const findDuplicatedItems = (arr) =>
  removeDuplicates(arr.filter((v, i) => arr.indexOf(v) !== i));

function problem6(forms) {
  const duplicatedWords = findDuplicatedItems(
    forms.map(([_, nickname]) => groupCharByN(nickname, 2)).flat()
  );

  const duplicatedCrews = forms.filter(([_, nickname]) => {
    let isIncluded = false;
    for (const word of duplicatedWords) {
      isIncluded = isIncluded || nickname.includes(word);
    }
    return isIncluded;
  });

  const unDuplicatedSortedEmails = removeDuplicates(
    duplicatedCrews.map(([email, _]) => email)
  ).sort();

  return unDuplicatedSortedEmails;
}

module.exports = problem6;
