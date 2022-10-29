//기능 목록 작성
//1. 조건에 안 맞는 경우 answer값에 -1을 넣는다.
//2. pobi가 뽑은 두 페이지수의 합과 곱을 저장한다.
//3. pobi 페이지수의 합과 곱 중 가장 큰 값을 pobiMax에 넣는다.
//4. crong이 뽑은 두 페이지수의 합과 곱을 저장한다.
//5. crong 페이지수의 합과 곱 중 가장 큰 값을 crongMax에 넣는다.
//6. pobiMax와 crongMax를 비교하는 switch문을 만들어 answer값을 저장하고 return한다.

//현재 문제: test 실행 시 answer이 케이스와 상관없이 2로 나온다. --> 문제해결 int 형으로 변환하지 않아 생긴 문제였음.

function problem1(pobi, crong) {
    var answer;                 //답
    let pobiPlus = [,];         //pobi의 합 저장
    let pobiMul = [,];          //pobi의 곱 저장
    let crongPlus = [,];        //crong의 합 저장
    let crongMul = [,];         //crong의 곱 저장
    let pobiPM;                 //pobi의 합 중 가장 큰 값
    let pobiMM;                 //pobi의 곱 중 가장 큰 값
    let crongPM;                //crong의 합 중 가장 큰 값
    let crongMM;                //crong의 곱 중 가장 큰 값
    let pobiMax;                //pobi에서 가장 큰 값
    let crongMax;               //crong에서 가장 큰 

    if (pobi[0] != pobi[1] - 1 || crong[0] != crong[1] - 1) {
        answer = -1;
    }

    else {

        //pobi 값//

        for (let i = 0; i < 2; i++) {
            let p100 = parseInt((pobi[i] / 100));
            let p10 = parseInt(parseInt(pobi[i] / 10) - (p100 * 10));
            let p1 = parseInt(pobi[i] % 10);

            pobiPlus[i] = p100 + p10 + p1;

            if (p100 == 0) {
                if (p10 == 0) {
                    pobiMul[i] = p1;
                }
                pobiMul[i] = p10 * p1;
            }
            else {
                pobiMul[i] = p100 * p10 * p1;
            }
        }

        pobiPM = (pobiPlus[0] > pobiPlus[1]) ? pobiPlus[0] : pobiPlus[1];
        pobiMM = (pobiMul[0] > pobiMul[1]) ? pobiMul[0] : pobiMul[1];
        pobiMax = (pobiPM > pobiMM) ? pobiPM : pobiMM;


        //crong 값//
        for (let i = 0; i < 2; i++) {
            let c100 = parseInt((crong[i] / 100));
            let c10 = parseInt(parseInt(crong[i] / 10) - (c100 * 10));
            let c1 = parseInt(crong[i] % 10);

            crongPlus[i] = c100 + c10 + c1;

            if (c100 == 0) {
                if (c10 == 0) {
                    crongMul[i] = c1;
                }
                crongMul[i] = c10 * c1;
            }
            else {
                crongMul[i] = c100 * c10 * c1;
            }
        }

        crongPM = (crongPlus[0] > crongPlus[1]) ? crongPlus[0] : crongPlus[1];
        crongMM = (crongMul[0] > crongMul[1]) ? crongMul[0] : crongMul[1];
        crongMax = (crongPM > crongMM) ? crongPM : crongMM;


        //pobi의 Max값과 crong의 Max 값 비교//
        if (pobiMax > crongMax) {
            answer = 1;
        }
        else if (pobiMax < crongMax) {
            answer = 2;
        }
        else if (pobiMax == crongMax) {
            answer = 0;
        }
    }
    return answer;
}
module.exports = problem1;
