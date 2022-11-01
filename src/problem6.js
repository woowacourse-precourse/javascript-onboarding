function problem6(forms) {

  let duplicatedNicname=[]
  let form=""
  
  for (let i=0;i<forms.length;i++){
    if (i==0)
      continue

    //i 번째 닉네임을 forms에서 꺼내오기
    form=forms[i][1]
    let formList=[]

    // i 번째 닉네임으로 만들 수 있는 연속된 문자열 formList에 저장시켜주기
    for (let k=0;k<form.length-1;k++){
      formList.push(form.substring(k,k+2))
    }

    for (let j=0;j<i;j++){
      for (let chr2 of formList){
        if (forms[j][1].includes(chr2)){
        
          duplicatedNicname.push(forms[i][0])
          duplicatedNicname.push(forms[j][0])
          break
        }
      }
    }
  }
  
  const nicknameSet=new Set(duplicatedNicname.sort())
  return Array.from(nicknameSet)
}

module.exports = problem6;


