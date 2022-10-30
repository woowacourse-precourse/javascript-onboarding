//문제 6번 기능 목록
//1. '닉네임'에서 중복 체크하는 기능
//      두 글자 이상의 문자가 연속적으로 순서에 맞추어 포함되어 있는지 체크
//2. 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거한 다음 result 배열 반환

function checkNickname(forms, index){
  var targetName = forms[index][1]; //기준 문자열
  var compName; //기준 문자열과 같은지 비교할 문자열, 
  var tmpString = "";
  var flag = 1; //중복 여부 판단
  var duplicatedIndex = new Set(); //중복 닉네임을 가진 크루의 인덱스 저장

  for (i=index+1; i<forms.length; i++){
      compName = forms[i][1]; //비교할 크루의 닉네임
      for (j=0; j<compName.length-1; j++){ //비교할 닉네임을 순회하면서
        tmpString = compName[j] +  compName[j+1]; //두 글자씩 추출
        flag = targetName.indexOf(tmpString); //부분문자열 중복 이용
        if(flag==0) { //중복 구간 존재
          //console.log(targetName, compName,tmpString);
          duplicatedIndex.add(index);
          duplicatedIndex.add(i);
        }
    }
  }
  
  return Array.from(duplicatedIndex); //중복 닉네임을 가진 크루의 인덱스 반환
}

function problem6(forms) {
  var answer, duplicatedName;
  var duplicatedArray = [];
  var emailSet = new Set(); //이메일 배열에서 중복이 없도록 Set(집합)으로 저장
  //duplicatedIndex = checkNickname(forms);
  
  for (i=0; i<forms.length; i++){
    duplicatedArray = checkNickname(forms, i); //중복 닉네임이 있는지 확인
    console.log(duplicatedArray); //중복되는 모든 크루의 인덱스 출력
  }

  
  return answer;
}
console.log(problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]))
module.exports = problem6;