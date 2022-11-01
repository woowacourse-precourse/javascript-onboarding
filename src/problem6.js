function divideString(nickname) {
    let div_nickname = [];
    for (let i = 0; i < nickname.length; i++) {
        let nickname_set = nickname[i][1];
        for(let j=0;j<nickname_set.length-1;j++){
            div_nickname.push(nickname_set.substr(j,2));
        }
    }return div_nickname;
}
function findDuplicate(div_nickname){
    let duplicate_string=[];
    for(let i=0;i<div_nickname.length;i++){
        if(i!==div_nickname.indexOf(div_nickname[i])){
            duplicate_string.push(div_nickname[i]);
        }
    }return duplicate_string;
}
function includeDuplicate(forms){
    let duplicate_email=[];
    let duplicate_nickname=findDuplicate(divideString(forms));
    for(let i=0;i<forms.length;i++){
        let nickname_set = forms[i][1];
        for(let j=0;j<duplicate_nickname.length;j++){
            if(nickname_set.includes(duplicate_nickname[j])){
                duplicate_email.push(forms[i][0]);
        }
        }
    }return duplicate_email;
}
function problem6(forms) {
    let answer;
    answer=(includeDuplicate(forms)); 
    answer=answer.filter((val,idx)=>{
        return answer.indexOf(val)===idx;
    });
    answer.sort();
    return answer;
}
module.exports = problem6;
