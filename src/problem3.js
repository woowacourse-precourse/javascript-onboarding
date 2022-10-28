function problem3(number) {
    const numArr = Array(number).fill().map((v,i)=> i+1);
    const splitNumArr = numArr.join('').split('').map(Number);
}

module.exports = problem3;
