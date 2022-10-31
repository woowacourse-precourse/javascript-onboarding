function problem5(money) {
  try{
    //예외사항 처리
    //입력의 데이터 타입이 숫자가 아닌 경우
    if(typeof money !== "number") throw new TypeError("입력의 데이터 타입이 숫자가 아닙니다.");

    //입력의 범위가 1 ~ 1,000,000이 아닌 경우
    if(money < 1 || money > 1000000) throw new RangeError("입력의 범위가 1 ~ 1,000,000을 벗어났습니다.");

    //전체 화폐의 개수를 최소화 -> 큰 금액의 화폐의 수를 최대화
    //화폐 단위 : 오만원 / 만원 / 오천원 / 천원 / 오백원 / 백원 / 오십원 / 십원 / 일원 (9개)
    const answer = new Array(9).fill(0); //화폐 단위 별 개수
    const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]; //화폐 단위
    for(let i = 0; i < 9; i++){
      let count = parseInt(money / unit[i]); //현재 화폐 단위에서 사용할 수 있는 최대 개수
      answer[i] = count;
      money -= count * unit[i];
    }
    return answer;
  }
  catch(e){
    return e;
  }
}

module.exports = problem5;
