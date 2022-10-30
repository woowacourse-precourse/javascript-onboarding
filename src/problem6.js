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
  let isInclude = false;
  wordArr.map((word) => {
    if(targetNickname.includes(word)) {  
      isInclude =  true;
    }
  })
  return isInclude;
}

function problem6(forms) {
  const answer = [];
  const emails = [];
  const nicknames = [];
  const alramToCrewIdx = new Set();

  forms.map((crew) => {
    emails.push(crew[0]);
    nicknames.push(crew[1]);
  })

  for(let i =0; i<nicknames.length-1; i++) {
    const twoWords = allTwoWordArr(nicknames[i]);
    for(let j = i+1; j<nicknames.length; j++) {
      if(is_wordIncludes(twoWords,nicknames[j])) {
        alramToCrewIdx.add(i);
        alramToCrewIdx.add(j);
      }
    }
  }

  for(let value of alramToCrewIdx) {
    answer.push(emails[value]);
  }
  return answer.sort();
}

module.exports = problem6;
