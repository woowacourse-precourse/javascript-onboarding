//페이지 숫자의 합
function sumScore(score){
  let sum_score = 0;
  score.map((element)=>{
  sum_score = sum_score + element
  })
  return sum_score;
}

//페이지 숫자의 곱
function mulScore(score){
  let mul_score = 1;
  score.map((element)=>{
    mul_score = mul_score * element
  })
  return mul_score;
}

//player의 페이지를 받아 가장 큰 점수를 계산하는 함수 
function maxScore(player){
  //페이지 숫자를 배열로 변환 ex) 97 => [9,7]
  let first_score = Array.from(String(player[0]));
  first_score = first_score.map((element)=>Number(element))
  let second_score = Array.from(String(player[1]));
  second_score = second_score.map((element)=>Number(element))
  //숫자 계산 결과
  first_sum = sumScore(first_score)
  second_sum = sumScore(second_score)
  first_mul = mulScore(first_score)
  second_mul = mulScore(second_score)
  //가장 큰 숫자 리턴
  return Math.max(first_sum,first_mul,second_sum,second_mul)
}


function problem1(pobi, crong) {
  var answer;
  //예외사항 if문으로 제외하기
  if(pobi[1]-pobi[0] != 1 || crong[1]-crong[0] != 1){
    return answer = -1;
  }
  if((pobi[1] <= 2 && pobi[0] >= 399)&&(crong[1] <= 2 && crong[0] >= 399)){
    return answer = -1;
  }
  if(pobi.length != 2 && crong.length != 2){
    return answer = -1;
  }
  //점수 비교
  let pobi_score = maxScore(pobi);
  let crong_score = maxScore(crong);
  if(pobi_score > crong_score){
    return answer = 1;
  }
  if(pobi_score == crong_score){
    return amswer = 0;
  }
  if(pobi_score < crong_score){
    return answer = 2;
  }
}
module.exports = problem1;
