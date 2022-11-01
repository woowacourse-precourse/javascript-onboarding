function problem6(forms) {
  let members = [...forms];
  let membersName = [];
  let resultEmail = [];

  for (let i = 0; i < members.length; i++) {
    membersName.push(members[i][1]);
  }

  const splitName = name => {
    let nameList = [];
    for (let i = 0; i < name.length - 1; i++) {
      nameList.push(name.substring(i, i + 2));
    }
    return nameList;
  };

  // 연속된 단어 찾기
  const findDoubled = membersName => {
    let words = [];
    for (let i = 0; i < membersName.length; i++) {
      words.push(splitName(membersName[i]));
    }
    let findWords = words.flat().filter((e, i, a) => a.indexOf(e) !== i);
    let result = [...new Set(findWords)];
    return result;
  };

  // 연속된 단어 포함된 닉네임의 이메일 찾기
  let doubledList = findDoubled(membersName);

  for (let i = 0; i < membersName.length; i++) {
    for (let j = 0; j < doubledList.length; j++) {
      if (membersName[i].includes(doubledList[j])) {
        resultEmail.push(members[i][0]);
      }
    }
  }

  // 찾은 이메일 오름치순, 중복 제거
  let result = [...new Set(resultEmail.sort())];
  return result;
}

module.exports = problem6;
