//1. 1부터 400사이의 수 중 홀수 x와 x+1값 배열 2개를 입력받는다
//2. x 의 각자리 수를 모두 더한 값 result1, 각자리수를 모두 곱한값 result2
// x+1의 각자리 수를 모두 더한 값 reuslt3, 각자리 수를 모두 곱한 값 result 4를 저장
//3. 최대값을 구한다 pobiMax , crongMax
//4. 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1로 return


function problem1(pobi, crong) {
  //기능 1. 입력값 배열 페이지로 나누기 ...미완
  const splitPages = (pages) =>
  
  //기능 2.페이지별 각자리 숫자들을 더한 값 구하기
  function addNum(n){
    var sumNum=0;

    do{
      sum +=n%10;
      n=Math.floor(n/10);
    }while (n>0);

    return sumNum;
  }
  //기능 3. 페이지별 각자리 숫자들 곱한 값 구하기 
  function multiNum(n){
    var multiNum=1;
    do{
      sum *=n%10;
      n=MAth.floor(n/10);
    }while (n>0);

    return multiNum;
  }

  //구한 값(왼쪽 더한값&곱한값, 오른쪽 더한값&곱한값)들 각각 pobiScoreTable, crongScoreTable 배열 만들어서 넣기....미완
  //기능 4. 각각의 배열에서 최대값 찾기 
  const pobiMax = Math.max(); //안에 뭐가 들어가야 할지 모르겠다..
  const crongMax= Math.max();
  //기능 5. max값들을 비교해서 점수 출력하기 
  var answer;
  if (pobiMax > crongMax){
    answer = 1;
  }
  else if (pobiMax <crongMax){
    answer = 2;
  }
  else if ( pobiMax === crongMax){
    answer = 0;
  }
  else{
    answer = -1;
  }
  
  return answer;
}

module.exports = problem1;
