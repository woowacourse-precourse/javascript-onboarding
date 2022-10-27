/*
기능목록

1. 각 자릿수 더하기
2. 각 자릿수 곱하기
3. 페이지가 유효한지 확인하기

포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1로 return

*/

function addPageNumber(num){
  num = num.toString();
  let a = Array.from(num);
  let new_arr = a.map((v) => parseInt(v))
  const result = new_arr.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  return result;
}

function multiplePageNumber(num){
  num = num.toString();
  let result = num[0];
  for(let i = 1; i < num.length; i++){
    result *= num[i]
  }
  return result;
}

function pageValidCheck(arr){
    if(arr[1] !== arr[0]+1){
      return false;
    } else{
      return true;
    }
}

function problem1(pobi, crong) {
  let answer;
  let pobi_result = 0;
  let crong_result = 0;
  if(!pageValidCheck(pobi) || !pageValidCheck(crong)){
    return -1;
  }

  for(let i = 0; i < 2; i++){
    let bigger_number = Math.max(addPageNumber(pobi[i]), multiplePageNumber(pobi[i]));
    pobi_result = Math.max(pobi_result, bigger_number);
  }

  for(let i = 0; i < 2; i++){
    let bigger_number = Math.max(addPageNumber(crong[i]), multiplePageNumber(crong[i]));
    crong_result = Math.max(crong_result, bigger_number);
  }


  if(pobi_result > crong_result){
    answer = 1;
  } else if(pobi_result < crong_result){
    answer = 2;
  } else if(pobi_result === crong_result){
    answer = 0;
  } else{
    answer = -1;
  }

  return answer;
}

module.exports = problem1;
