const {
  makeNickNameCombination,
  makeCountMapOfNickName,
  filterValue2OverOfMapToList,
  getNameIncludeIndex,
  getTargetOfList,
} = require("./problem6.util");

function problem6(forms) {
  const emails = forms.map(([email, _]) => email);
  const nickNames = forms.map(([_, nickName]) => nickName);
  const combinations = nickNames.map(makeNickNameCombination).flat();
  const map = makeCountMapOfNickName(combinations);
  const filterCombinations = filterValue2OverOfMapToList(map);
  const filterCombinationsCallback = (nickName) =>
    getNameIncludeIndex(nickNames, nickName);
  const indexs = Array.from(
    new Set(filterCombinations.map(filterCombinationsCallback).flat())
  );
  const answer = getTargetOfList(emails, indexs).sort();
  return answer;
}

module.exports = problem6;
