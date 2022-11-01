// 왼쪽 페이지, 오른쪽 페이지 숫자를 각 자리를 더하거나 곱해서 가장 큰 수를 뽑는다.
// 가장 큰 수를 본인의 점수로 한다.
// 점수를 비교해 점수가 가장 높게 나오는 사람이 승자
// 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1로 return
/*
입력값
pobi [97, 98] -> 곱셈일경우 [63, 72] / 덧셈일 경우 [16, 17] -> 72
crong [197, 198] -> 곱셈일 경우 [63, 72] / 덧셈일 경우 [17, 18] -> 72
그래서 max 값이 둘 다 72이기 때문에 무승부

pobi [131, 132] -> 곱셈일경우 [3, 6] / 덧셈일 경우 [5, 6] -> 6
crong [211, 212] -> 곱셈일 경우 [2, 4] / 덧셈일 경우 [4, 5] -> 5
그래서 둘이 비교했을 때 pobi의 max값이 더 크기 때문에 return 1

예외사항
책의 페이지가 순서대로 되어있지 않을 경우 -1 return 해야할 듯

**/

function problem1(pobi, crong) {
  var answer = 0;
  let numsOfpobi = [];
  let numsOfcrong = [];
  let max_pobi = 0;
  let max_crong = 0;

  if (pobi[pobi.length-1] == pobi[0]+1 && crong[crong.length-1] == crong[0]+1){
      //pobi
      for (let i = 0; i < pobi.length; i++){
          let pobi_num = pobi[i];
          let pobi_plus_sum = 0;
          let pobi_double_sum = 1;
  
          while(pobi_num){
              pobi_plus_sum = pobi_plus_sum + pobi_num%10;
              pobi_double_sum = pobi_double_sum * (pobi_num%10);
  
              pobi_num = Math.floor(pobi_num/10);
          };
          numsOfpobi.push(pobi_plus_sum);
          numsOfpobi.push(pobi_double_sum);
  
          };
      max_pobi = Math.max.apply(null, numsOfpobi);
  
      //crong
      for (let j=0; j < crong.length; j++){
          let crong_num = crong[j];
          let crong_plus_sum = 0;
          let crong_double_sum = 1;
  
          while(crong_num){
              crong_plus_sum = crong_plus_sum + crong_num%10;
              crong_double_sum = crong_double_sum * (crong_num%10);
  
              crong_num = Math.floor(crong_num/10);
  
          };
          numsOfcrong.push(crong_plus_sum);
          numsOfcrong.push(crong_double_sum);
  
      };
      max_crong = Math.max.apply(null, numsOfcrong);
          
      if (max_pobi > max_crong){
          answer = 1;
      }else if (max_crong > max_pobi){
          answer = 2;
      }else if (max_crong == max_pobi){
          answer = 0;
      }

  }else {
      answer = -1;
  }
  

  return answer;
};



module.exports = problem1;