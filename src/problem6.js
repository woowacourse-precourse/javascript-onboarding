//닉네임1(n1), 닉네임2(n2) 에서 2글자 이상 중복되는 구간있는지 확인
//n1의 특정 구간과 n2 특정 구간이 겹치면 n2 에서 그 구간 지우기
//n2가 그대로면 중복x - false
//바뀌었다면 중복o - true
const checkNick=(name, check)=>{
    let regex;
    for(let i=0;i<name.length-1;i++){
        regex = new RegExp(`${name[i]}${name[i+1]}`,'g');
        if(regex.test(check)) { return false }
    }
    return true;
  }
//1. 닉네임길이 오름차순 정렬
//2. for문을 통해 하나씩 checkNick(n1, n2)
//  ** 이전에 비교한 닉네임은 비교하지 않음 **
//수정 필요 : indexOf() 변경, depth 줄이기..

function makeChecklist(forms){
    forms.sort((x,y)=>x[1].length-y[1].length);
    const checklist = {};
    forms.forEach((form,index)=>{
        checklist[form[1]] = [];
        for (let i=forms.length-1; i>index; i--){
            checklist[form[1]].push(forms[i][1])
        }
    })
    return checklist;
}

function problem6(forms) {
  let result = [];
  let idx = count = 0;
  forms.sort((x,y)=>x[1].length-y[1].length);
  while(idx<forms.length-1){
      count = 0;
      for(let i=idx+1;i<forms.length;i++){
          if (checkNick(forms[idx][1],forms[i][1])){
              count += 1;
              if (result.indexOf(forms[i][0])<0){
                  result.push(forms[i][0]);
              }
          }
      }
      if (result.indexOf(forms[idx][0])<0 && count){
          result.push(forms[idx][0]);
      }
      idx+=1;
  }
  result.sort();
  return result;
}
module.exports = problem6;

console.log(
    problem6([
        ["jm@email.com", "제이엠"],
        ["jason@email.com", "제이슨"],
        ["woniee@email.com", "워니"],
        ["mj@email.com", "엠제이"],
        ["nowm@email.com", "이제엠"],
      ])
);