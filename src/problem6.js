function problem6(forms) {
  let answer=[];
  let cnt=0
  for(let i=0; i<forms.length;i++){
    cnt=0
    for(let j=i+1; j<forms.length;j++){
      str1=forms[i][1]
      length_1=str1.length
      for(let k=0;k<length_1-1;k++){
        let tmp=forms[i][1].slice(k,k+2)
        if(forms[j][1].includes(tmp)){
          cnt+=1
          answer.push(forms[i][0])
          answer.push(forms[j][0])
          break
        }
      }  
    }
  }
  answer=new Set(answer)
  answer=Array.from(answer)
  answer.sort()
  return answer;
}

module.exports = problem6;
