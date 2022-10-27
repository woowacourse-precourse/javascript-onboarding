["제이", "이엠", "제이", "이슨", "워니", "엠제", "제이", "이제", "제엠"][
  ("제이", "제엠")
];

// 분리
const makeNickNameCombination = (nickName) => {
  const res = [];
  for (let i = 0; i < nickName.length - 1; i++) {
    const cur = nickName[i];
    const next = nickName[i + 1];
    res.push(cur + next);
  }
  return res;
};
// map 생성
const makeCountMapOfNickName = (nickNames) => {
  const obj = {};
  for (const nickName of nickNames) {
    obj[nickName] ??= 0;
    obj[nickName]++;
  }
  return obj;
};
// 2개 이상 분리
const filterValue2OverOfMapToList = (obj) =>
  Object.entries(obj).reduce((acc, cur) => {
    const [key, value] = cur;
    if (value > 1) acc.push(key);
    return acc;
  }, []);
// key를 포함한 닉네임 index 뽑기
const getNameIncludeIndex = (nickNames, keyword) =>
  nickNames
    .map((nickName, i) => (nickName.includes(keyword) ? i : -1))
    .filter((i) => i !== -1);
// index로 전체 뽑기
const getTargetOfList = (nicknames, indexs) => {};

exports.makeNickNameCombination = makeNickNameCombination;
exports.makeCountMapOfNickName = makeCountMapOfNickName;
exports.filterValue2OverOfMapToList = filterValue2OverOfMapToList;
exports.getNameIncludeIndex = getNameIncludeIndex;
exports.getTargetOfList = getTargetOfList;
