function problem6(forms) {
  var answer;
  // 임시 배열 생성
  const tList = [];

  // Check 함수 반환값 tList에 삽입
  for (let i = 0; i < forms.length; i++) {
    tList.push(...Check(forms[i][1].split("")));
  } 
  return answer;
}

//문자열에 포함된 중복 조합 배열 생성 함수 구현
function Check(nickname) { 
  const tempList = [];
  for (let i = 0; i<nickname.length-1;i++){
    for (j = i + 1; j < nickname.length; j++) {
      ttList.push(nickname.slice(i, j + 1).join(""));
    }
  };
  return tempList;
}




module.exports = problem6;
