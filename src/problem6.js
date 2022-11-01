//name과 비교하고자하는 check를 인수로 받아 닉네임 가능이면 true, 불가능이면 false 반환
function checkNick(name, check){
  let regex;
  for(let i=0;i<name.length-1;i++){
    regex = new RegExp(`${name[i]}${name[i+1]}`,'g');
    if(regex.test(check)) { return false; }
  }
  return true;
}

//닉네임 유효검사쌍이 겹치지 않도록, { 닉네임 : 검사할 닉네임 배열 } 객체 반환
function makeChecklist(forms){
  forms.sort((x,y)=>x[1].length-y[1].length);
  const checklist = {};

  forms.forEach((form,index)=>{
    checklist[form[1]] = [];
    for (let i=forms.length-1; i>index; i--){
      checklist[form[1]].push(forms[i][1]);
    }
  })
  return checklist;
}

//{ 닉네임 : 이메일주소 } 객체 반환
function makeEmailList(forms){
  const emailList = {};
  forms.forEach((form)=>{
    emailList[form[1]]=form[0];
  })
  return emailList;
}

function problem6(forms) {
  const checklist = makeChecklist(forms);
  const invalid = new Set();
  Object.keys(checklist).forEach((name)=>{
    checklist[name].forEach((check)=>{
      checkNick(name,check) || invalid.add(name) && invalid.add(check);
    })
  })
  const emailList = makeEmailList(forms);
  const result = [...invalid].map(name=>emailList[name]).sort();
  return result;
}
module.exports = problem6;

//1. {닉네임 : 검사할 닉네임들} 객체 생성
//2. 1에서 생성한 객체 순회하면서 닉네임 유효성 검사 - 적합하지 않을 시 invalid 에 추가
//3. {닉네임 : 이메일 주소} 객체 생성
//4. invalid 순회하면서 닉네임을 이메일주소로 바꾼 result 생성 + 정렬