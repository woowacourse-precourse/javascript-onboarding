/*
*요구사항
닉네임 중 같은 글자가 연속적으로 포함 될 경우 두 계정 모두 사용 제한.

사용제한이 걸린 계정의 이메일을 문자열 오름차순 정렬하여 return
이때, 중복은 제거하라.

*해결전략
dict 를 사용하자. 
닉네임의 연속된 조합 단어를 dict에 키값으로 저장하고 카운트 1씩해줌.
이때, 같은 글자가 연속적으로 포함된다면 같은 키값을 가질 것이고, 카운트는 1이 넘어가게됨.

이 값들을 찾아내어. 해당 키값을 가지고 있는 계정들의 이메일을 따로 저장.
문자열 중복제거하고 정렬하여 출력.

주의! 
refuseEmail 함수에서 map 을 사용하면 email 을 두번 이상 중복되게 추가할 수도 있으므로 
for loop 사용했다.

*기능목록
1. 닉네임으로 만들어질 수 있는 연속된 문자열 생성시켜 return 해주는 함수 =>  makeKeys
2. 입력된 닉네임을 키값에 넣어주는 함수 =>  enterDict
3. 키값의 value 값이 2개 이상인 값들을 return 해주는 함수 =>  checkValue
4. 사용제한될 이메일을 return 해주는 함수 =>  refuseEmail
*/

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
    accountInfo.map((account) => {
      let nickName = account[1].split("");
      makeResult = makeKeys(nickName);
      makeResult.map((key) => {
        if (nickNameCnt[key]) nickNameCnt[key] += 1;
        else nickNameCnt[key] = 1;
      });
    });
    return;
  }

  function checkValue(dict) {
    let keys = Object.keys(dict).filter((key) => dict[key] > 1);
    return keys;
  }

  function refuseEmail(accountInfo) {
    let result = [];
    accountInfo.map((account) => {
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

  refuseNames.map((refuseNickName) => {
    refuseList[refuseNickName] = true;
  });

  const answer = refuseEmail(forms);

  return answer;
}

module.exports = problem6;
