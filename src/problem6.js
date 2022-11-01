function problem6(forms) {
  var answer;
  // 임시 배열 생성
  const tList = [];

  // Check 함수 반환값 tList에 삽입
  for (let i = 0; i < forms.length; i++) {
    tList.push(...Check(forms[i][1].split("")));
  } 

  // tList를 집합으로 감싸 중복 제거
  const DuplicateList = new Set(tList);
  
  Reprod(forms,DuplicateList,answer);
  



  return answer;
}

//문자열에 포함된 중복 조합 배열 생성 함수 구현
function Check(nickname) { 
  const tempList = [];
  for (let i = 0; i<nickname.length-1;i++){
    for (j = i + 1; j < nickname.length; j++) {
      tempList.push(nickname.slice(i, j + 1).join(""));
    }
  };
  return tempList;
}

//문자열 중복 검사 후 입력값의 전자 반환
function Reprod(forms,arr,result) {
  arr.forEach((x) => {
    let finaldex = [];
    for(let i = 0; forms.length; i++){
      if(forms[i][1] !== x && forms[i][1].indexOf(x) > -1){
        finaldex.push(i);
      }
    }
    if (finaldex.length > 1){
      finaldex.map((email) => {
        result.add(forms[email][0]);
      });
    };
  });
}



module.exports = problem6;
