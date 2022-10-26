
//페이지 숫자의 합
function sumScore(score){
  let sum_score = 0;
  score.map((element)=>{
  sum_score = sum_score + element
  })
  return sum_score;
}

function mulScore(score){
  let mul_score = 1;
  score.map((element)=>{
    mul_score = mul_score * element
  })
  return mul_score;
}

//pobi나 crong을 받아 점수차이를 계산하는 함수 
function scoreDiff(page){
  let first_score = Array.from(String(page[0]));
  first_score = first_score.map((element)=>Number(element))
  let second_score = Array.from(String(page[1]));
  second_score = second_score.map((element)=>Number(element))
  //페이지 숫자를 배열로 변환 ex) 97 => [9,7]

  first_sum = sumScore(first_score)
  second_sum = sumScore(second_score)
  first_mul = mulScore(first_score)
  second_mul = mulScore(second_score)
  return [first_mul,second_mul];
}

console.log(scoreDiff([197,198]))


function problem1(pobi, crong) {
  var answer = -1;
  //예외사항 if문으로 제외하기
  if(pobi[1]-pobi[0] == 1 && crong[1]-crong[0] == 1){
    return answer;
  }else if((pobi[1] <= 2 && pobi[0] >= 399)&&(crong[1] <= 2 && crong[0] >= 399)){
    return answer;
  }else if(pobi.length != 2 && crong.length != 2){
    return answer;
  }
}
module.exports = problem1;
