function problem6(forms) {
  let nameList = makeNameList(forms);
  let resultList = checking(nameList, forms);
  answer = [...new Set(resultList)].sort();

  return answer;
}

function makeNameList(forms) {
  let nicknameList = [];
  for(let i = 0; i < forms.length; i++) {
    nicknameList.push(forms[i][1]);
  }

  return nicknameList;
}

function checking(nameList, forms) {
  let resultList = [];
  let nameListLength = nameList.length;
  let email = 0;

  for(let curNameIndex = 0; curNameIndex < nameListLength-1; curNameIndex++) {
    let nameLength = nameList[curNameIndex].length;
    for(let curCharIndex = 0; curCharIndex < nameLength-1; curCharIndex++) {
      let flag = 0;
      let check = nameList[curNameIndex].substr(curCharIndex, 2);
      for(let comparedNameIndex = curNameIndex+1; comparedNameIndex < nameListLength; comparedNameIndex++) {
        if(nameList[comparedNameIndex].includes(check)) {
          resultList.push(forms[comparedNameIndex][email])
        }
      }
      if(flag === 1) {
        resultList.push(forms[curNameIndex][email]);
      }
    } 
  }
  return resultList;
}

module.exports = problem6;

// 두 글자 이상의 문자가 연속적으로 순서에 맞추어 포함되어 있는 경우 중복으로 간주
// result는 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거

// 1. forms 의 닉네임 부분만 따로 리스트 생성
// 2. 닉네임 리스트에 대한 for 문 생성 (-> 닉네임)
// 3. 각 닉네임에 대한 for 문 생성 (-> 닉네임의 문자)
// 4. 문자 중복 여부를 판단할 변수 생성
// 5. 기준이 되는 닉네임과 비교될 닉네임에 대한 for 문 생성
// 6. 문자가 중복되는 경우 결과 리스트에 해당 닉네임의 이메일 추가
// 7. 중복 여부에 따라 기준이 되는 닉네임도 결과 리스트에 추가
// 8. 결과 리스트에서 중복 제거 후 오름차순으로 정렬