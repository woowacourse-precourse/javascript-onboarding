function problem6(forms) {
  let answer = [];
  let nickNameList = [];
  let overlapList = []; 
  let totalList = []; 

  for(let i=0; i<forms.length; i++) {
    nickNameList.push(forms[i][1]);
  }

  for(let i=0; i<forms.length; i++) {
    getOverlapList(nickNameList[i], totalList, overlapList);
  }

  for(let i=0; i<forms.length; i++) {
    if(getAnswer(nickNameList[i], overlapList)) {
      answer.push(forms[i][0]);
    }
  }

  answer.sort();

  return answer;

}

function getOverlapList(str, totalList, overlapList) {
  for(let i=1; i<str.length - 1; i++) {
    let twoChar = str[i-1] + str[i];

    if (totalList.includes(twoChar) === false) {
      totalList.push(twoChar);
    } 
    
    else if (overlapList.includes(twoChar) === false) {
      overlapList.push(twoChar);
    }
  }
}

/** 연속문자와 중복문자를 비교하여 정답을 얻는 기능 구현 */
function getAnswer(str, overlapList) {
  for(let i=0; i<str.length; i++) {
    let twoChar = str[i-1] + str[i];

    if(overlapList.includes(twoChar) === true) {
      return true;
    }
  }
}

module.exports = problem6;
