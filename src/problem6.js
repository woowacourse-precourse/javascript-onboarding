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
function problem6(forms) {
    let answer;
    return answer;
}
module.exports = problem6;
