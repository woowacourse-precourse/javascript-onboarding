function problem3(number) {
  var answer;
  try{
    //예외사항 처리
    //입력의 데이터 타입이 숫자가 아닌 경우
    if(typeof number !== "number") throw new TypeError("입력의 데이터 타입이 숫자가 아닙니다.");

    //입력의 범위가 1 ~ 10,000이 아닌 경우
    if(number < 1 || number > 10000) throw new RangeError("입력의 범위가 1 ~ 10,000을 벗어났습니다.");

    //369 게임 시작
    answer = 0;
    for(let i = 1; i <= number; i++){
      i.toString().split('').forEach((value) => {
        if(value === '3' || value === '6' || value ==='9') answer += 1;
      })
    }
    return answer;
  }
  catch(e){
    return e;
  }
}
module.exports = problem3;
