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

module.exports = problem6;
