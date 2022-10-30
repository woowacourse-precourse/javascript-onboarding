function game_calc(arr){
  let left_l, left_m, left_r, right_l, right_m, right_r;
  let left_sum, left_mul, right_sum, right_mul;
  let arr_max;
  
  //제한 사항
  if(arr[0] <= 1 || arr[1] >= 400 || arr[1] != (parseInt(arr[0])+1) || arr[0]%2 != 1 || arr[1]%2 !=0)
  {
    return -1;
  }

  
  if(arr[1] >= 100) { //3자리수 계산

    left_l = parseInt(arr[0]/100);
    left_m = parseInt((arr[0]%100)/10);
    left_r = arr[0] % 10;
  
    right_l = parseInt(arr[1]/100);
    right_m = parseInt((arr[1]%100)/10);
    right_r = arr[1] % 10;
  
    left_sum = left_l + left_m + left_r;
    left_mul = left_l * left_m * left_r;
    right_sum = right_l + right_m + right_r;
    right_mul = right_l * right_m * right_r;
  
    arr_max = Math.max(left_sum, left_mul, right_sum, right_mul); 
  
    if(arr[0]==99) { //예외(99,100페이지 일 때)
      arr_max = 81; 
    }
  
  } else if(arr[1] >= 10) { //2자리수 계산
    left_l = parseInt(arr[0]/10);
    left_r = arr[0] % 10;
  
    right_l = parseInt(arr[1]/10);
    right_r = arr[1] % 10;
  
    left_sum = left_l + left_r;
    left_mul = left_l * left_r;
    right_sum = right_l + right_r;
    right_mul = right_l * right_r;
  
    arr_max = Math.max(left_sum, left_mul, right_sum, right_mul);
  
  } else { //1자리수 계산
    arr_max = arr[1];
  }

  return arr_max;

}

function problem1(pobi, crong) {
  var answer;
  let pobi_max, crong_max; //포비최대값, 크롱 최대값
    
  pobi_max = game_calc(pobi);
  crong_max = game_calc(crong);
  
  //포비, 크롱 최대값 비교
  if(pobi_max == -1 || crong_max == -1){
    //console.log(-1);
    answer = -1;
  } else if(pobi_max > crong_max){ //포비 > 크롱
    //console.log("1");
    answer = 1;
  } else if(crong_max > pobi_max){ //크롱 > 포비
    //console.log("2");
    answer = 2;
  } else { //크롱 == 포비
    //console.log("0");
    answer = 0;
  } 

  console.log(answer);
  return answer;
}

//테스트 케이스 #1
problem1(['97','98'], ['197', '198']);

//테스트 케이스 #2
problem1(['131', '132'], ['211', '212']);

//테스트 케이스 #3
problem1(['99', '102'], ['211', '212']);

module.exports = problem1;
