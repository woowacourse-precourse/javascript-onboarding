function problem1(pobi, crong) {
   if(checkPage(pobi) == -1 || checkPage(crong) == -1) return -1;
   else {
    const pobiPage = pobi.map(v=> String(v).split('').map(Number));
    const crongPage = crong.map(v=> String(v).split('').map(Number));
    const pobiValue = compareValue(pobiPage);
    const crongValue = compareValue(crongPage);
    if(pobiValue > crongValue) return 1;
    else if(pobiValue < crongValue) return 2;
    else return 0;
   }
}
function checkPage(page) {
    if(page.some(v=> v < 1 || v > 400)) return -1;
    if(page[0]+1 !== page[1]) return -1;
    if(page.length !== 2) return -1;
    if(page[0]%2 === 0) return -1;
    return 1;
}
function compareValue(arr) {
    const [lPage] = arr.slice(0,1);
    const [rPage] = arr.slice(1,2);
    const left = calculation(lPage);
    const right = calculation(rPage);
    return left > right ? left : right
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