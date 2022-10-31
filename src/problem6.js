function problem6(forms) {
  let dupEmailList = getDupEmailList(forms);

  return dupEmailList;
}

module.exports = problem6;

function getDupEmailList(forms) {
  let userMap = new Map(forms);

  let nicknameList = Array.from(userMap.values());

  let dupEmailList = new Set();

  for (let i = 0; i < nicknameList.length; i++) {
    // 최소 중복 문자열 갯수 2를 유지하기 위해
    // nicknameList[i].length - 1까지 루프
    for (let j = 0; j < nicknameList[i].length - 1; j++) {
      for (let minDupLen = 2; minDupLen < nicknameList[i].length; minDupLen++) {
        let target = nicknameList[i].slice(j, j + minDupLen);

        let dupNickNameList = nicknameList.filter((item) =>
          item.includes(target)
        );

        // 중복일때만 중복 이메일 리스트에 추가
        if (dupNickNameList.length == 1) continue;
        else {
          Array.from(userMap.keys()).find((key) => {
            for (let nickname of dupNickNameList) {
              if (userMap.get(key) === nickname) dupEmailList.add(key);
            }
          });
        }
      }
    }
  }
  return Array.from(dupEmailList.values()).sort();
}
