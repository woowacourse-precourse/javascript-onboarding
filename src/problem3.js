//기능 목록 작성
//1. number가 입력되면 숫자를 전부 자릿수마다 쪼개서 배열로 저장한다.
//2. 배열을 돌면서 3, 6, 9가 있을 때마다 answer값을 증가시킨다.
//3. answer을 반환한다.

function problem3(number) {
    var answer;
    var count = 0;
    var tmpNumber = number;
    var tmpArray = [];
    var tmpArray2 = [];
    let array369 = [];
    let tmpNumToStr;
    let tmpNum;
    let tmp;

    if (tmpNumber > 10000) {
        answer = "10000 이하의 값을 입력하시오.";
    }
    else if (tmpNumber <= 10000) {
        tmp = tmpNumber + 1;
        for (let i = 0; i < tmp; i++) {

            tmpArray[i] = i;
            tmpNumToStr = tmpArray[i];
            array369[i] = tmpNumToStr.toString();

            tmpNum = array369[i];
            tmpArray2 = tmpNum.split("");

            let tmp2 = tmpArray2.length + 1;
            for (let j = 0; j < tmp2; j++) {
                tmpArray2[j] = parseInt(tmpArray2[j]);
                if (tmpArray2[j] == 3 || tmpArray2[j] == 6 || tmpArray2[j] == 9) {
                    count = count + 1;
                }
            }
        }
        answer = count;
    }
    return answer;
}

module.exports = problem3;