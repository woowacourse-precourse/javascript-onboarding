function problem1(pobi, crong) {
  var answer = -1;
  if(handleExcept(pobi, crong) === -1)
    return -1;
  let pobiScore = myBestScore(pobi[0]) > myBestScore(pobi[1]) ? myBestScore(pobi[0]) : myBestScore(pobi[1]) ;
  let crongScore =  myBestScore(crong[0]) > myBestScore(crong[1]) ? myBestScore(crong[0]) : myBestScore(crong[1]) ;
  //console.log(`3. ${pobiScore}`);
  //console.log(`4. ${crongScore}`);
  if(pobiScore === crongScore) return 0;
  if(pobiScore > crongScore) answer = 1;
  else if(pobiScore < crongScore) answer = 2;
  return answer;
}
function handleExcept(pobi, crong){//모든 예외사항 처리하기
  const [a1, b1] = pobi;
  const [a2,b2] = crong;
  if(a1 === 1 || a2 === 1 || b1 === 400 ||b2 === 400)// 첫페이지나 마지막페이지
    return -1;
  if(a1 % 2 != 1 || a2 % 2 != 1) // 첫 시작이 짝수일경우
    return -1;
  if(b1 - a1 != 1 || b2 - a2 != 1)//바로 옆 페이지가 아닐경우
   return -1;
}
function myBestScore(score){// 더하기 플러스 각각 비교하기
  let plus = 0;
  let mult = 1;
  //console.log(`0. ${score}`);
 while(score!= 0){
   plus += parseInt(score % 10);
   mult *= parseInt(score % 10);
   score = parseInt(score / 10);
 }

 //console.log(`1. ${plus}`);
 //console.log(`2. ${mult}`);
 return plus > mult ? plus : mult;


}

module.exports = problem1;
/* 비교부분 while에서 오래 걸렸다. 원래는 아무 함수도 안걸고 했는데
계속 무승부결과가 안나오는 거임. 그래서 console.log 해봤는데 소수가 나오길래 Math.ceil 함수를 써봤다.
 근데 그러니까 score /= 10 에서 무한반복이 뜨는 거다. 해결하기 위해 console.log로 다시 찍어보니
 score/= 10이 정수형이 아니라 9.7 이런식으로 소수가 돼서 올림 시키면 계속 무한루프가 발생 할 수 밖에..
 그래서 그 부분만 Math.floor로 했는데 생각해보니 그냥 다 정수로 처리하면 굳이 상황 따져가며
 함수 다르게 사용할 필요가 없어서 결과적으로 parseInt()를 사용했다. 
 그랬더니 결과가 깔끔'S ~~ 
*/