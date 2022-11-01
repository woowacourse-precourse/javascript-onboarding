function problem1(pobi, crong) {
  /*
  기능 목록
  1. 유효성 체크 (페이지 번호 올바른지, 첫 장 및 마지막 장 아닌지)
  2. 가장 큰 수 찾기
  3. 포비와 크롱의 가장 큰 수 비교하여 최종 정답 반환
  */

  // 1. Validation Check
  if (pobi[0] === 1 || pobi[0] === 399) return -1;
  if (crong[0] === 1 || crong[0] === 399) return -1;

  for (var i = 0; i < pobi.length - 1; i++)
    if (pobi[i] + 1 !== pobi[i + 1]) return -1;
  
  for (var i = 0; i < crong.length - 1; i++)
    if (crong[i] + 1 !== crong[i + 1]) return -1;
  
  // 2. Find Max
  var pobiMax = 0;
  var crongMax = 0;
  
  for (var i = 0; i < pobi.length; i++){
    var page = (pobi[i] + '').split('');
    var sum = page.reduce((acc, cur) => acc += Number(cur), 0);
    var mul = page.reduce((acc, cur) => acc *= Number(cur), 1);
    pobiMax = sum > mul ? sum : mul;
  }

  for (var i = 0; i < crong.length; i++){
    var page = (crong[i] + '').split('');
    var sum = page.reduce((acc, cur) => acc += Number(cur), 0);
    var mul = page.reduce((acc, cur) => acc *= Number(cur), 1);
    crongMax = sum > mul ? sum : mul;
  }

  // 3. Compare & Return answer
  if (pobiMax > crongMax) return 1;
  else if (pobiMax < crongMax) return 2;
  else if (pobiMax === crongMax) return 0;
}

module.exports = problem1;

/*
1~400

왼쪽은 홀수, 오른쪽은 짝수
게임에서 이긴사람이 책을 갖기로

1. 임의로 펼치고
2. 왼쪽 페이지 번호의 각자리 숫자를 모두 더하거나, 모두 곱해 가장 큰수 구하기
3. 오른쪽 페이지도 똑같이
=> 자리별로 더해보고, 곱해봐서 더 큰수 찾으면 됨
4. 총 4개중에 가장 큰수를 정하는 것
5. 점수를 비교해 가장 높은 사람이 게임의 승자인걸로
6. 시작면이나 마지막면이 나오도록 책을 펼치면 안됨 (1,2나 399,400 안된다는말?)

1번 예시를 보면
포비는 16, 63, 17, 72 중 72이고
크롱은 17, 63, 18, 72 중 72라서
가장 큰 수가 같음 = 0

problem1([99, 102], [211, 212])

18 81 => 81
3 0 => 3
=> 81

4 2 => 4
5 4 => 5
=> 5

=> 81
*/