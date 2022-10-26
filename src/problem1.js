//기능 목록 작성
//1. 조건에 안 맞는 경우 answer값에 -1을 넣는다.
//2. pobi가 뽑은 두 페이지수의 합과 곱을 저장한다.
//3. pobi 페이지수의 합과 곱 중 가장 큰 값을 pobiMax에 넣는다.
//4. crong이 뽑은 두 페이지수의 합과 곱을 저장한다.
//5. crong 페이지수의 합과 곱 중 가장 큰 값을 crongMax에 넣는다.
//6. pobiMax와 crongMax를 비교하는 switch문을 만들어 answer값을 저장하고 return한다.

function problem1(pobi, crong) {
    var answer;
    let pobiLPlus; pobiMul; pobiMax;
    let crongPlus; crongMul; crongMax;

    if (pobi[0] != pobi[1] - 1 || crong[0] != crong[1] - 1) {
        answer = -1;
    }

    else {
        for (i = 0; i < pobi.length; i++) {
            var p100 = pobi[i] / 100;
            var p10 = pobi[i] / 10 - p100;
            var p1 = pobi[i] % 10;

            pobiLPlus[i] = p100 + p10 + p1;
            pobiMul[i] = p100 * p10 * p1;
        }
    }

  return answer;
}

module.exports = problem1;
