function problem1(pobi, crong) {
  var answer = solution(pobi, crong);
  return answer;
}

function solution(pobi, crong){
  let pobi_1 = pobi[0];
  let pobi_2 = pobi[1];
  let crong_1 = crong[0];
  let crong_2 = crong[1];

  if(pobi_1 == 1 || pobi_2 == 400 || crong_1 == 1 || crong_2 == 400 || pobi_1 % 2 != 1 || crong_1 %2 != 1 || pobi_2 - pobi_1 != 1 || crong_2 - crong_1 != 1){
    return -1;
  }
  else{
    let pobi_sum = 0;
    let pobi_pro = 1;

    let tmp_sum = 0;
    let tmp_pro = 1;
    
    do{
      pobi_sum += pobi_1 % 10;
      pobi_pro *= pobi_1 % 10;
      pobi_1 = Math.floor(pobi_1/10);
    }while(pobi_1 > 0);
    do{
      tmp_sum += pobi_2 % 10;
      tmp_pro *= pobi_2 % 10;
      pobi_2 = Math.floor(pobi_2/10);
    }while(pobi_2 > 0);

    pobi_sum = (pobi_sum > tmp_sum)? pobi_sum: tmp_sum;
    pobi_pro = (pobi_pro > tmp_pro)? pobi_pro: tmp_pro;
    let pobi_result = (pobi_sum > pobi_pro)?pobi_sum:pobi_pro;

    let crong_sum = 0;
    let crong_pro = 1;

    tmp_sum = 0;
    tmp_pro = 1;
        
    do{
      crong_sum += crong_1 % 10;
      crong_pro *= crong_1 % 10;
      crong_1 = Math.floor(crong_1/10);
    }while(crong_1 > 0);
    do{
      tmp_sum += crong_2 % 10;
      tmp_pro *= crong_2 % 10;
      crong_2 = Math.floor(crong_2/10);
    }while(crong_2 > 0);
      
    crong_sum = (crong_sum > tmp_sum)? crong_sum: tmp_sum;
    crong_pro = (crong_pro > tmp_pro)? crong_pro: tmp_pro;
    let crong_result = (crong_sum > crong_pro)?crong_sum:crong_pro;
    if(pobi_result > crong_result){
      return 1;
    }
    else if(pobi_result == crong_result){
      return 0;
    }
    else{
      return 2;
    }
  }
}
module.exports = problem1;
