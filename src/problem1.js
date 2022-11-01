function problem1(pobi, crong) {
  var answer;

  let pobi_score;
  let crong_score;
  let score_sum;
  let score_multi;
  
  //예외처리
  if(ExceptPages(pobi[0], pobi[1]))
    return -1;
  if(ExceptPages(crong[0], crong[1]))
    return -1;

  //포비 왼쪽페이지 점수 계산
  score_sum =  SumDigit(pobi[0]);
  score_multi = MultiDigit(pobi[0]);
  pobi_score = score_sum > score_multi ? score_sum : score_multi ;
  
  //포비 오른쪽페이지 점수 계산
  score_sum =  SumDigit(pobi[1]);
  score_multi =  SumDigit(pobi[1]);
  pobi_score = pobi_score > score_sum ? pobi_score : score_sum ;
  pobi_score = pobi_score > score_multi ? pobi_score : score_multi ;

  //크롱 왼쪽페이지 점수 계산
  score_sum =  SumDigit(crong[0]);
  score_multi = MultiDigit(crong[0]);
  crong_score = score_sum > score_multi ? score_sum : score_multi ;

  //크롱 오른쪽페이지 점수 계산
  score_sum =  SumDigit(crong[1]);
  score_multi =  SumDigit(crong[1]);
  crong_score = crong_score > score_sum ? crong_score : score_sum ;
  crong_score = crong_score > score_multi ? crong_score : score_multi ;

  if(pobi_score > crong_score)
    answer = 1;
  if(pobi_score < crong_score)
    answer = 2;
  else if(pobi_score == crong_score)
    answer = 0;


  return answer;
}


//각 자릿수를 모두 더한 후 결과값을 리턴
function SumDigit(num){
  let digit = getDigit(num);
  let score = 0;

  num = num.toString();
  for(let i=0; i<digit; i++){
    score = score + Number(num[i]);
  }

  return score;
}

//각 자릿수를 모두 곱한 후 결과값을 리턴
function MultiDigit(num){
  let digit = getDigit(num) ;
  let score = 1;

  num = num.toString();
  for(let i=0; i<digit; i++){
    score = score * Number(num[i]);
  }
  
  return score;
}

//자릿수 구해 결과값을 정수로 리턴
function getDigit(num) {
  num = num.toString();
  let numDigit = num.length;
  return numDigit;
}

function ExceptPages(page1, page2){
  let isExcept = false;

  //맨 앞뒤 페이지를 펼쳤을 경우
  if(1>=page1 && page2>=400)
    isExcept =true;

  //앞 뒤 페이지가 각각 홀수 짝수가 아닌경우
  if(page1%2 == 0)
    isExcept =true;
  if(page2%2 == 1)
    isExcept =true;

  //앞뒤 페이지의 차가 1이 아닐 경우
  if(page2-page1 != 1)
    isExcept = true;

  return isExcept;
}

module.exports = problem1;

