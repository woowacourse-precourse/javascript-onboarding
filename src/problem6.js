function problem6(forms) {
  var answer;
  forms_add = []

  //console.log("폼 입력 확인",forms)

  
  for ( i = 0 ; i < forms.length ; i++) {  
    names = []
    for (j=0; j<forms[i][1].length - 1; j++){
      //console.log("select", forms[i][1][j])
      names.push(forms[i][1].slice(j,j+2))
    }
    //console.log("result", names)
    forms[i][1] = names
    //배열의 두번째 이름 두글자씩배열로 쪼개기
    
  } 
  //console.log("배열 쪼갠것 확인",forms)
  answer = []
  for ( i = 0 ; i < forms.length ; i ++) { 
    //유저 순회
    let flag = true
    for ( j = 0 ; j < forms[i][1].length && flag ; j ++) {
      //아이디 조합 순회
      crr = forms[i][1][j] //현재 단어
      for ( k = 0 ; k < forms.length ; k++){
        //다른 유저 순회
        //console.log(crr, forms[k][1])
        if(
          forms[k][1].includes(crr) // 다른 유저 이름 배열에 현재 이름 있는지 확인
          && k != i // 같은 유저일 경우 검사하지 않음
          ) { 
          answer.push(forms[i][0])
          flag = false
          break
        }
      }
    }
  }
  //console.log("배열 확인",answer)

  answer = [...(new Set(answer))] // 중복 제거
  answer = answer.sort() // 정렬
  //console.log("정답 확인",answer)

  return answer

} 
  

//스택으로 비교하기
//비교해서 같은 값이 2개일 경우 삭제


module.exports = problem6;
