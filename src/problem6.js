function problem6(forms) {
  var answer;
  forms_add = []

  console.log("폼 입력 확인",forms)

  for ( i = 0 ; i < forms.length ; i++) {
    forms[i][1] = [...forms[i][1]]
    //배열의 두번째 이름 배열로 쪼개기
  } console.log("배열 쪼갠것 확인",forms)
  
  
  for ( i = 0 ; i < forms.length ; i++) {
    for ( j = 0 ; j <forms[i][1].length ; j++) {
      forms[i][1].sort()
      console.log("정렬확인",forms)
        if(forms[i][1][j] != forms[i][1][j+1]) {
          forms.push(forms[i][1][j])
        }else {
          forms.pop()
        }
      }
      console.log("단어삭제확인",forms)
    }
  }
  

//스택으로 비교하기
//비교해서 같은 값이 2개일 경우 삭제
return answer;

module.exports = problem6;
