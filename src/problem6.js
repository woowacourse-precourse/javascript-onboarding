function problem6(forms) {
  function makeKeys(words) {
    let madeKeys = [];
    for (let i = 0; i < words.length - 1; i++) {
      let Key = words[i];
      for (let j = i + 1; j < words.length; j++) {
        Key += words[j];
        madeKeys.push(Key);
      }
    }
    return madeKeys;
  }

  function enterDict(accountInfo) {
    accountInfo.forEach((account) => {
      let nickName = account[1].split("");
      let makeResult = makeKeys(nickName);
      makeResult.forEach((key) => {
        if (nickNameCnt[key]) nickNameCnt[key] += 1;
        else nickNameCnt[key] = 1;
      });
    });
    return;
  }

  function checkValue(checkDict) {
    let keys = Object.keys(checkDict).filter((key) => checkDict[key] > 1);
    return keys;
  }

  function refuseEmail(accountInfo) {
    let result = [];
    accountInfo.forEach((account) => {
      let email = account[0];
      let nickName = account[1].split("");
      let makeResult = makeKeys(nickName);
      for (let i = 0; i < makeResult.length; i++) {
        if (refuseList[makeResult[i]]) {
          result.push(email);
          break;
        }
      }
    });
    result = [...new Set(result)];
    result.sort();

    return result;
  }

  let [nickNameCnt, refuseList] = [{}, {}];
  enterDict(forms);
  const refuseNames = checkValue(nickNameCnt);
  refuseNames.forEach((refuseNickName) => {
    refuseList[refuseNickName] = true;
  });
  const answer = refuseEmail(forms);

  return answer;
}

module.exports = problem6;
