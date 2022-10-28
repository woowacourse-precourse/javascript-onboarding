function problem3(number) {
    let clapNum = 0;
    const numArr = Array(number).fill().map((v,i)=> i+1);
    const splitNumArr = numArr.join('').split('').map(Number);
    for(let i=0; i<splitNumArr.length; i++) {
        if(splitNumArr[i]==3|splitNumArr[i]==6|splitNumArr[i]==9) {
            clapNum +=1;
        }
    }
    return clapNum;
}

module.exports = problem3;
