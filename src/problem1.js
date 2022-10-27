function problem1(pobi, crong) {
  let answer;
  let score = [pageGame(pobi), pageGame(crong)];

  if (score[0] === -1 || score[1] === -1)
    answer = -1;
  else if(score[0] > score[1])
    answer = 1;
  else if (score[0] < score[1])
    answer = 2;
  else if (score[0] === score[1])
    answer = 0;

  return answer;
}

function check (player) {
  //오류 핸들링을 해줘야 하는경우
  //1. 왼쪽 오른쪽 페이지가 각각 홀수, 짝수가 아닐 때
  //2. 책의 번호가 연속적이지 않을 때
  //3. 책의 첫페이지가 0보다 작거나 400이 넘을 때
  let page = player;

  if(page[0] <= 0 || page[0] >= 400)
    return true;
  else if(page[0] % 2 === 0 || page[1] % 2 === 1)
    return true;
  else if(page[1] !== page[0] + 1)
    return true;
  else 
    return false;
    
}

function pageGame (player) {
  let sum = [0, 1, 0, 1]; // 자릿수를 곱한 값과 더한 값을 저장
  let page = player; //page[0] : 왼쪽페이지, page[1] : 오른쪽페이지
  let length = [0, 0];   //자릿수는 toString().length; 를 통해 구한다.
  let max = -999999; //return 할 최댓값

  //오류 핸들링
  if(check(player))
    return -1;

  //페이지 숫자 길이 계산
  for(let i = 0; i < 2; i++)
    length[i] = page[i].toString().length;

  //왼쪽페이지 계산
  for(let i = 0; i < length[0]; i++) {
    sum[0] += page[0] % 10;
    sum[1] *= page[0] % 10;
    page[0] = parseInt(page[0] /= 10);
  };

  //오른쪽페이지 계산
  for(let i = 0; i < length[1]; i++) {
    sum[2] += page[1] % 10;
    sum[3] *= page[1] % 10;
    page[1] = parseInt(page[1] /= 10);
  };

  //최댓값 구하기
  for(let i = 0; i < sum.length; i++) {
    if(max <= sum[i])
      max = sum[i];
  };

  return max;
}

module.exports = problem1;
