/*
[기능목록]
1. 페이지가 연속된 페이지인지 확인하기
2. 왼쪽 페이지는 홀수, 오른쪽 페이지는 짝수인지 확인하기
3. 각 자릿수 더하기
4. 각 자릿수 곱하기
5. 누가 이겼는지 확인하기
*/

function checkOddEvenNumber(arr){
  if(arr[0] % 2 !== 0 && arr[1] % 2 === 0){
    return true;
  } else{
    return false;
  }
}


function checkSequencePage(arr){
  if(arr[1] !== arr[0]+1){
    return false;
  } else{
    return true;
  }
}


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

function getBiggerNumber(arr){
  let result = 0;
  for(let i = 0; i < 2; i++){
    let bigger_number = Math.max(addPageNumber(arr[i]), multiplePageNumber(arr[i]));
    result = Math.max(result, bigger_number);
  }
  return result;
}


function getWinner(pobi_result, crong_result){
  if(pobi_result > crong_result){
    return 1;
  } else if(pobi_result < crong_result){
    return 2;
  } else if(pobi_result === crong_result){
    return 0;
  } else{
    return -1;
  }
}

function problem1(pobi, crong) {
  let answer;
  let pobi_result = 0;
  let crong_result = 0;
  if(!checkSequencePage(pobi) || !checkSequencePage(crong) || !checkOddEvenNumber(pobi) || !checkOddEvenNumber(crong)){
    return -1;
  }

  pobi_result = getBiggerNumber(pobi);
  crong_result = getBiggerNumber(crong);
  answer = getWinner(pobi_result, crong_result);
  return answer;
}

module.exports = problem1;
