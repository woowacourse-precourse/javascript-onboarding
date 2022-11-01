/*
  기능목록
  1. 이메일, 닉네임만 따로 저장하는 배열 구현
  2. 닉네임을 받으면 두글자씩 가능한 모든 경우의 수를 배열에 담아 리턴해주는 함수 구현
  3. 두글자씩 모든 경우를 담은 배열에서 같은글자가 타겟닉네임에 포함되어있는지 체크하는 함수 구현
  4. 같은글자가 포함된 경우의 인덱스 배열 set으로 해당 크루의 인덱스를 (중복없이) 저장
  5. 저장된 인덱스의 이메일만 정답 배열에 담는다
  6. 오름차순 정렬 후 정답 리턴
*/
function allTwoWordArr(str) {
  const twoWordArr = [];
  for(let i =0; i<str.length-1; i++) {
    twoWordArr.push(str.substr(i,2));
  }
  return twoWordArr;
}

function is_wordIncludes(wordArr,targetNickname) {
  for(let i =0; i<wordArr.length; i++) {
    if(targetNickname.includes(wordArr[i])) {
      return true;
    }
  }
  return false;
}

function problem6(forms) {
  const answer = [];
  const alramToCrewIdx = new Set();
  for(let i =0; i<forms.length-1; i++) {
    const twoWords = allTwoWordArr(forms[i][1]);
    for(let j = i+1; j<forms.length; j++) {
      if(is_wordIncludes(twoWords,forms[j][1])) {
        alramToCrewIdx.add(i);
        alramToCrewIdx.add(j);
      }
    }
  }
  for(let value of alramToCrewIdx) {
    answer.push(forms[value][0]);
  }
  
  return answer.sort();
}

module.exports = problem6;
