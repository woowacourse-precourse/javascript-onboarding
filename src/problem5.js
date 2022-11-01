function problem5(money) {
  let DENOMINATION =[50000, 10000, 5000, 1000, 500, 100, 50, 10, 1] //돈 단위를 배열에 정의해놓음
  let answer = [];
  for(let i=0; i<DENOMINATION.length; i++)//단위 만큼 루프
  {
    if(money/DENOMINATION[i]!=0) //만일 해당 단위에 변환이 된다면
    {
      answer.push(Math.floor(money/DENOMINATION[i])) //정수로 정답배열에 넣고 그만큼 금액을 차감한다
      money -= DENOMINATION[i]*(Math.floor(money/DENOMINATION[i]));
    }
    else
      answer.push(Math.floor(money/DENOMINATION[i])); //단위로 변환이 안될경우 차감하지 않고 다음 단위로 넘어간다
  }
    return answer;
  }


module.exports = problem5;
