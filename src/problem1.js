function changeNumberToString(number){
  str=number.toString();
  return str;
}

function plusPageNumber(page_number){
  let plus_number=0;
  page_number = changeNumberToString(page_number);
  for(let i=0;i<page_number.length;i++){
    plus_number+=parseInt(page_number[i]);
  }
  return plus_number;
}
function mutiplyPageNumber(page_number){
  let multiply_number=1;
  page_number = changeNumberToString(page_number);
  for(let i=0;i<page_number.length;i++){
    multiply_number*=parseInt(page_number[i]);
  }
  return multiply_number;
}
function compareScore(pobi_max,crong_max){
  if(pobi_max>crong_max)return 1;
  if(pobi_max<crong_max)return 2;
  if(pobi_max==crong_max)return 0;
}
function findMaxNumber(page_arr){
  let max_number;
  for(let i=0;i<page_arr.length;i++){
    let plus_page = plusPageNumber(page_arr[i]);
    let mutiply_page = mutiplyPageNumber(page_arr[i]);
    page_arr[i]=Math.max(plus_page,mutiply_page);
  }
  max_number = Math.max(...page_arr);
  return max_number;
}
function exception(page_arr){
  if(!(page_arr[0]-page_arr[1]==-1))return 1;
  if(page_arr.length>2)return 1;
  if(page_arr.includes(0|400))return 1;
}
function problem1(pobi, crong) {
    let answer;
    if((exception(pobi)||exception(crong))){
      return -1;
    }
    let pobi_max_num = findMaxNumber(pobi);
    let crong_max_num = findMaxNumber(crong);
    answer=compareScore(pobi_max_num,crong_max_num);
    return answer;
}
module.exports = problem1;
