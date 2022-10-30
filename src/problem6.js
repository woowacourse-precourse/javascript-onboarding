function problem6(forms) {
  var answer=[];
  let email=[];//이메일 저장 배열
  let name=[];//닉네임 저장 배열
  for(let i=0;i<forms.length;i++){
    email[i]=forms[i][0];
    name[i]=forms[i][1];

  }
  for(let i=0;i<name.length-1;i++){//첫번째 글자 선택
    for(let j=i+1;j<name.length;j++){//비교 글자의 선택
      for(let k=0;k<name[k].length;k++){//첫번째 글자의 자리
        for(let l=0;l<name[l].length;l++){//비교 글자의 자리
        if(name[i][k]==name[j][l]){//같은 글자가 나왔을때
          if(name[i][k+1]==name[j][l+1]){//두번째 글자도 같은지 확인
            answer[i]=email[i];//같다면 이메일 저장 후 멈춤
            answer[j]=email[j];
            break;            
          }
          }
        }
      }
    }
  }
  answer.sort()//오름차순 정렬

  return answer;
}

module.exports = problem6;
