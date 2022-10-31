//기능 목록 작성
//1. 오만원권부터 십원까지 전부 변수로 선언한다.
//2. money를 오만원권의 변수부터 나눈 몫과 나머지를 계산한다.
//3. 몫은 배열로 저장하고 나머지를 다음 단위로 나누고 반복한다.
//4. 계산이 끝나면 result를 반환한다.

function problem5(money) {
    var answer;
    let tmpmoney = money;
    let moneyArray = { 50000, 10000, 5000, 1000, 500, 100, 50, 10, 1};
    let leftArray = {,,,,,,,, };

    if (tmpmoney > 1000000 || tmpmoney < 1) {
        answer = "The value of money must be between 1 and 1000000";
    }

    else {
        for (let i = 0; i < moneyArray.length; i++) {
            let share = tmpmoney / moneyArray[i];
            moneyArray[i] = parseInt(share);
            tmpmoney = tmpmoney % moneyArray[i];
        }
    }

    return answer;
}

module.exports = problem5;
