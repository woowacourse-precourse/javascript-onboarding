function problem3(number) {
    let answer = 0;

    let numToString = '';
    for (let i = 1; i <= number; i++) {
        numToString += i.toString();
    }

    numToString.split('').map(function (e) {
        if (e === '3' || e === '6' || e === '9') answer++;
    });

    return answer;
}

module.exports = problem3;

//1. 해당숫자까지 문자열에 더해준다
//2. 문자열에 3,6,9가 포함된 갯수를 카운트 해준다.
