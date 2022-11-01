function checkNick(name, check){
    let regex;
    for(let i=0;i<name.length-1;i++){
        regex = new RegExp(`${name[i]}${name[i+1]}`,'g');
        if(regex.test(check)) { return false }
    }
    return true;
}

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