function problem6(forms) {
  let flag = false;
    for(let i=0;i<forms.length;i++){
      if(forms[i].length>2 || forms[i].length<1){ //예외1
        return -1;
      }
      let reg = /\@email.com/;
      if(!reg.test(forms[i][0])){ //예외2
        return -1;
      }
    }
  let nick = new Array(forms.length);
  var answer = [];
  forms.forEach((el,idx)=>{
    let tmp = el[1].split("");
    nick[idx] = new Array(tmp.length-1);
    for(let i=0;i<tmp.length-1;i++){
      nick[idx][i] = tmp[i]+tmp[i+1];
    }
  });
  for(let i=0;i<nick.length-1;i++){
    for(let j=i+1;j<nick.length;j++){
      let interSection = nick[i].filter(el=> nick[j].includes(el));
      if(interSection.length>0){
        answer.push(i);
        answer.push(j);
      }
    }
  }
  answer = [...new Set(answer)];
  const email = answer.map(el=>{
    return forms[el][0];
  })
  return email.sort();
}
/* 1.닉네임을 2글자씩 잘라서 저장(연속적으로 순서에 맞추어 포함여부).
   2.닉네임끼리 중복을 확인 후 중복 시 저장
   3.저장한 닉네임에서 중복 제거 (1,2,1,3 => 1,2,3)
   4.중복된 닉네임에 해당하는 이메일을 오름차순 정렬 후 반환한다.

   제한사항에 포함되지 않아 예외 처리 해줘야할 것 들
   예외1) forms 입력값이 [이메일,닉네임]으로 이루어 지지 않은 경우 [이메일,닉네임,이메일,닉네임]
   예외2) forms 입력값이 [닉네임,이메일]으로 이루어진 경우
*/
module.exports = problem6;
