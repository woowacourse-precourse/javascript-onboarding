//기능 목록 작성
//1. 조건에 안 맞는 경우 answer값에 -1을 넣는다.
//2. pobi가 뽑은 두 페이지수의 합과 곱을 저장한다.
//3. pobi 페이지수의 합과 곱 중 가장 큰 값을 pobiMax에 넣는다.
//4. crong이 뽑은 두 페이지수의 합과 곱을 저장한다.
//5. crong 페이지수의 합과 곱 중 가장 큰 값을 crongMax에 넣는다.
//6. pobiMax와 crongMax를 비교하는 switch문을 만들어 answer값을 저장하고 return한다.

function problem1(pobi, crong) {
    var answer;
    let pobiPlus; pobiMul; pobiMax;
    let crongPlus; crongMul; crongMax;

    if (pobi[0] != pobi[1] - 1 || crong[0] != crong[1] - 1 || pobi[1] - pobi[0] != 1 || cobi[1] - cobi[0] != 1) {
        answer = -1;
    }

    else {
        //cobi 값
        for (i = 0; i < pobi.length; i++) {
            var p100 = pobi[i] / 100;
            var p10 = pobi[i] / 10 - p100;
            var p1 = pobi[i] % 10;

            pobiPlus[i] = p100 + p10 + p1;
            pobiMul[i] = p100 * p10 * p1;
            const pobiPM = (pobiPlus[i] > pobiPlus[i + 1]) ? pobiPlus[i] : pobiPlus[i + 1];
            const pobiMM = (pobiMul[i] > pobiMul[i + 1]) ? pobiMul[i] : pobiMul[i + 1];
            pobiMax = (pobiPM > pobiMul) ? pobiPM : pobiMM;
        }

        //crong 값
        for (i = 0; i < crong.length; i++) {
            var c100 = crong[i] / 100;
            var c10 = crong[i] / 10 - c100;
            var c1 = crong[i] % 10;

            crongPlus[i] = c100 + c10 + c1;
            crongMul[i] = c100 * c10 * c1;
            let crongPM = (crongPlus[i] > crongPlus[i + 1]) ? crongPlus[i] : crongPlus[i + 1];
            let crongMM = (crongMul[i] > crongMul[i + 1]) ? crongMul[i] : crongMul[i + 1];
            crongMax = (crongPM > crongMul) ? crongPM : crongMM;
        }
    }

  return answer;
}

module.exports = problem1;
