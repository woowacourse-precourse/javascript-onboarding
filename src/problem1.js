function problem1(pobi, crong) {
  var answer;

  try{
    //예외사항 처리
    //1) pobi, crong의 데이터 타입이 배열이 아닐때
    if(!Array.isArray(pobi) || !Array.isArray(crong)) throw new TypeError("pobi와 crong의 데이터 타입이 배열이 아닙니다.");

    //2) pobi, crong의 길이가 2가 아닐때
    if(pobi.length !== 2 || crong.length !== 2) throw new Error("페이지 번호 배열의 길이가 2가 아닙니다.");

    //3) 페이지 번호가 숫자가 아닐때
    if(typeof pobi[0] !== "number" || typeof pobi[1] !== "number" || typeof crong[0] !=="number" || typeof crong[1] !=="number"){
      throw new TypeError("페이지 번호의 타입이 숫자가 아닙니다.");
    }

    //4) 페이지 범위가 1~400이 아닐때
    if(pobi[0] < 1 || pobi[0] > 400 || pobi[1] < 1 || pobi[1] > 400 || crong[0] < 1 || crong[0] > 400 || crong[1] < 1 || crong[1] > 400){
      throw new RangeError("페이지 번호 범위를 벗어났습니다.");
    } 
    
    //5) 왼쪽 페이지 번호가 홀수가 아닐때
    if(pobi[0] % 2 !== 1 || crong[0] % 2 !== 1) throw new Error("왼쪽 페이지 번호가 홀수가 아닙니다.");

    //6) 오른쪽 페이지 번호가 짝수가 아닐때
    if(pobi[1] % 2 !== 0 || crong[1] % 2 !== 0) throw new Error("오른쪽 페이지 번호가 짝수가 아닙니다.");

    //7) 왼쪽 페이지 번호 >= 오른쪽 페이지 번호
    if(pobi[0] >= pobi[1] || crong[0] >= crong[1]) throw new Error("왼쪽 페이지 번호가 오른쪽 페이지 번호보다 작지 않습니다.");

    //8) (오른쪽 페이지 번호 - 왼쪽 페이지 번호) !== 1
    if(pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) throw new Error("오른쪽 페이지 번호와 왼쪽 페이지 번호의 차이가 1이 아닙니다.")

    //9) 시작 면이나 마지막 면이 나온경우
    if(pobi[0] === 1 || pobi[1] === 400 || crong[0] === 1 || crong[1] === 400) throw new Error("시작 면이나 마지막 면이 나오도록 책을 펼치지 않습니다.");


    //페이지 번호 게임
    //1. 책을 임의로 펼친다 -> 각각 pobi, crong

    //2. 왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
    let pobiNumbers = [pobi[0].toString().split('').map(Number), pobi[1].toString().split('').map(Number)];
    let crongNumbers = [crong[0].toString().split('').map(Number), crong[1].toString().split('').map(Number)];
    
    let pobiMax = Math.max(pobiNumbers[0].reduce((prev, curr) => prev + curr), pobiNumbers[0].reduce((prev, curr) => prev * curr));
    let crongMax = Math.max(crongNumbers[0].reduce((prev, curr) => prev + curr),crongNumbers[0].reduce((prev, curr) => prev * curr));

    //3. 오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
    //4. 2~3 과정에서 가장 큰 수를 본인의 점수로 한다.
    pobiMax = Math.max(pobiMax, pobiNumbers[1].reduce((prev, curr) => prev + curr), pobiNumbers[1].reduce((prev, curr) => prev * curr))
    crongMax = Math.max(crongMax, crongNumbers[1].reduce((prev, curr) => prev + curr),crongNumbers[1].reduce((prev, curr) => prev * curr))
    
    //5. 점수를 비교해 가장 높은 사람이 게임의 승자가 된다.
    if(pobiMax > crongMax) answer = 1; //포비가 이긴다면 1
    else if(pobiMax < crongMax) answer = 2; //크롱이 이긴다면 2
    else if(pobiMax === crongMax) answer = 0; //무승부라면 0
    else answer = -1; //예외사항은 -1

    //6. 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다. (에러처리)
  }
  catch(e){
    answer = -1; //예외사항은 -1
  }
  finally{
    return answer;
  }

}

module.exports = problem1;
