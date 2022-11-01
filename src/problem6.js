function problem6(forms) {
  //1.forms의 각 닉네임을 두글자씩 빼서 자신을 제외한 나머지 닉넴과 비교
  //2.만약 존재한다면 이메일이 answer에 있는지 한번 더 확인(중복제거위함)
  //3.이메일이 중복되지 않는다면 answer에 추가
  //4.오름차순으로 정렬 
  let answer = [];
  for(let i=0; i<forms.length;i++){
    for(let j=0; j<forms[i][1].length-1;j++){ 
      let two = forms[i][1].slice(j,j+2);
      for(let k=0; k<forms.length;k++){
        if(i===k) continue;
        else{
          if(forms[k][1].includes(two)){
            if(answer.includes(forms[k][0])) continue;
            else{
              answer.push(forms[k][0]);
            }
          }
        }
      }
    }

  }
  answer.sort();
  return answer;
}

module.exports = problem6;
