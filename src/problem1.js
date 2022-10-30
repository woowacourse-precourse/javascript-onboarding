function problem1(pobi, crong) {
  var answer;

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
  //6. 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다.

  return answer;
}

module.exports = problem1;
