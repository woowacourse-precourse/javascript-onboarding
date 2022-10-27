const {
  makeNickNameCombination,
  makeCountMapOfNickName,
  filterValue2OverOfMapToList,
  getNameIncludeIndex,
  getTargetOfList,
} = require("./problem6.util");

const reduce = (f, acc, iter) => {
  for (const a of iter) acc = f(acc, a);
  return acc;
};

const pipe = (args, ...fs) => reduce((a, f) => f(a), args, fs);

function problem6(forms) {
  const emails = forms.map(([email, _]) => email);
  const nickNames = forms.map(([_, nickName]) => nickName);
  const filterCombinationsCallback = (nickName) =>
    getNameIncludeIndex(nickNames, nickName);

  const answer = pipe(
    nickNames,
    (nickNames) => nickNames.map(makeNickNameCombination),
    (combinations) => combinations.flat(),
    (combinations) => makeCountMapOfNickName(combinations),
    (map) => filterValue2OverOfMapToList(map),
    (filterCombinations) => filterCombinations.map(filterCombinationsCallback),
    (filterCombinations) => filterCombinations.flat(),
    (indexs) => Array.from(new Set(indexs)),
    (indexs) => getTargetOfList(emails, indexs),
    (answer) => answer.sort()
  );
  return answer;
}

module.exports = problem6;
