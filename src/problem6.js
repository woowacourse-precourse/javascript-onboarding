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
    const result = [...invalid].map((name)=>{
        return emailList[name];
    }).sort();
    return result;
}
module.exports = problem6;