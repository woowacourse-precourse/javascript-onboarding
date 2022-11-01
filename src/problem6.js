// 닉네임 추출 
function getNickName(forms) {
  let nickName = [];
  for(let i = 0; i < forms.length; i++) {
    nickName.push(forms[i][1]);
  }
  return nickName;
}

// 닉네임 중복 체크
function duplicateCheck(nickName) {
  // let nickName = ['제이엠', '제이슨', '워니', '엠제이', '이제엠'];
  let duplicateNickName = [];
  for(let i = 1; i < nickName.length; i++) {
    for(let j = 0; j < nickName[i-1].length-1; j++) {
      // 2글자까지만 해줘도 그 이상은 같을 것이므로 2글자씩 잘라서.
      let splitName = nickName[i-1].substr(j,2);

      for(let k = 0; k < nickName.length; k++) {
        // 비교함.
        if(nickName[k].includes(splitName) && k != i-1){
          duplicateNickName.push(k);
        }
      }
    }
  }
  // 중복이 되지 않게끔 set으로 선언.
  const duplicateNickNameSet = new Set(duplicateNickName);
  return [...duplicateNickNameSet];
}

function problem6(forms) {
  let answer = [];

  getNickName = duplicateCheck(getNickName(forms)); 

  // getNickName에서 얻은 인덱스를 가지고 중복 닉네임 이메일 answer 에 넣어주기. 
  for(let i = 0; i < getNickName.length; i++){
    answer.push(forms[getNickName[i]][0]);
  }

  return answer.sort();
}

module.exports = problem6;
