function problem1(pobi, crong) {
   if(pobi[0]+1!=pobi[1] || crong[0]+1 != crong[1]) return -1;
   else {
    const pobiArr = pobi.map(v=> String(v).split('').map(Number));
    const crongArr = crong.map(v=> String(v).split('').map(Number));
    const pobiValue = compareValue(pobiArr);
    const crongValue = compareValue(crongArr);
    if(pobiValue>crongValue) return 1;
    else if(pobiValue<crongValue) return 2;
    else return 0;
   }
}
function compareValue(arr) {
    const [lPage] = arr.slice(0,1);
    const [rPage] = arr.slice(1,2);
    const left = calculation(lPage);
    const right = calculation(rPage);
    return left>right ? left : right
}
function calculation(value) {
    let sum = 0;
    let multiply = 1;
    const len = value.length;
    for(let i=0; i<len; i++) {
        sum += value[i];
        multiply *= value[i];
    }
    return sum>multiply ? sum : multiply;
}
module.exports = problem1;