//포비가 이긴다면 1, 크롱이 이긴다면 2
// 각자리숫자 더 하거나 곱한것중에 큰거 answer 배열에 넣고  
// 그중에 큰거 answer indexOf로 빼주기 +1

function problem1(pobi, crong) {
  if(pobi[0] === 1 || pobi[1] === 400 || crong[0] === 1 || crong[1] === 400|| pobi[1]-pobi[0] !== 1 || crong[1]-crong[0] !== 1){ return -1 }


  let score = {
    pobi: compare_num(String(pobi[0]),String(pobi[1])), // 포비 점수
    crong: compare_num(String(crong[0]),String(crong[1])) // 크롱 점수
  }

  if(score.pobi > score.crong){
    return 1;
  }else if(score.pobi < score.crong){
    return 2
  }
  else if(score.pobi === score.crong){
    return 0
  }else{
    return -1
  }
}


function compare_num(num1,num2){
  let sum_result = new Array(2).fill(0)
  let multiply_result = new Array(2).fill(1)

  for(let i=0;i<num1.length;i++){
    sum_result[0] = sum_result[0] + Number(num1[i])
    multiply_result[0] = multiply_result[0] * Number(num1[i])
  }
  for(let i=0;i<num2.length;i++){
    sum_result[1] = sum_result[1] + Number(num2[i])
    multiply_result[1] = multiply_result[1] * Number(num2[i])
  }

  return Math.max(Math.max(...sum_result),Math.max(...multiply_result))
}




module.exports = problem1;
