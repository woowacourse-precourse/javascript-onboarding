function divideString(n) {
    let result = [];
    for (let i = 0; i < n.length; i++) {
        const a = n[i][1];
        for(let j=0;j<a.length-1;j++){
            result.push(a.substr(j,2));
        }
    }
    return result;
}
function findDuplicate(n){
    let result=[];
    for(let i=0;i<n.length;i++){
        if(i!==n.indexOf(n[i])){
            result.push(n[i]);
        }
    }
    return result;
}
function includeDuplicate(n){
    let answer=[];
    let result=findDuplicate(divideString(n));
    for(let i=0;i<n.length;i++){
        const a = n[i][1];
        for(let j=0;j<result.length;j++){
            if(a.includes(result[j])){
            answer.push(n[i][0]);
        }
        }
    }
    return answer;
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
