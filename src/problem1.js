//기능 목록 작성
//1. 조건에 안 맞는 경우 answer값에 -1을 넣는다.
//2. pobi가 뽑은 두 페이지수의 합과 곱을 저장한다.
//3. pobi 페이지수의 합과 곱 중 가장 큰 값을 pobiMax에 넣는다.
//4. crong이 뽑은 두 페이지수의 합과 곱을 저장한다.
//5. crong 페이지수의 합과 곱 중 가장 큰 값을 crongMax에 넣는다.
//6. pobiMax와 crongMax를 비교하는 switch문을 만들어 answer값을 저장하고 return한다.

function problem1(pobi, crong) {
    var answer;
    let pobiPlus = [,];
    let pobiMul = [,];
    let pobiMax;
    let crongPlus = [,];
    let crongMul = [,];
    let crongMax;

    if (pobi[0] != pobi[1] - 1 || crong[0] != crong[1] - 1 || pobi[1] - pobi[0] != 1 || crong[1] - crong[0] != 1) {
        answer = -1;
    }

    else {
        //pobi 값
        for (let i = 0; i < 2; i++) {
            let p100 = [,];
            let p10 = [,];
            let p1 = [,];
            p100[i] = pobi[i] / 100;
            p10[i] = pobi[i] / 10 - p100;
            p1[i] = pobi[i] % 10;

            pobiPlus[i] = p100[i] + p10[i] + p1[i];
            pobiMul[i] = p100[i] * p10[i] * p1[i];
            const pobiPM = (pobiPlus[i] > pobiPlus[i + 1]) ? pobiPlus[i] : pobiPlus[i + 1];
            const pobiMM = (pobiMul[i] > pobiMul[i + 1]) ? pobiMul[i] : pobiMul[i + 1];
            pobiMax = (pobiPM > pobiMul) ? pobiPM : pobiMM;
        }

        //crong 값
        for (let i = 0; i < 2; i++) {
            let c100 = [,];
            let c10 = [,];
            let c1 = [,];
            c100[i] = crong[i] / 100;
            c10[i] = crong[i] / 10 - c100;
            c1[i] = crong[i] % 10;

            crongPlus[i] = c100[i] + c10[i] + c1[i];
            crongMul[i] = c100[i] * c10[i] * c1[i];
            const crongPM = (crongPlus[i] > crongPlus[i + 1]) ? crongPlus[i] : crongPlus[i + 1];
            const crongMM = (crongMul[i] > crongMul[i + 1]) ? crongMul[i] : crongMul[i + 1];
            crongMax = (crongPM > crongMul) ? crongPM : crongMM;
        }

        //pobi와 crong 값 비교//
        if (pobiMax > crongMax) {
            answer = 1;
        }
        if (pobiMax < crongMax) {
            answer = 2;
        }
        if (pobiMax = crongMax) {
            answer = 0;
        }
    }

    return answer;
}

module.exports = problem1;

