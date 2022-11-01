function problem1(pobi, crong) {
  var answer;

  const max_sum_p = Math.max(Sum(pobi[0]), Sum(pobi[1]));
  const max_mul_p = Math.max(Mul(pobi[0]), Mul(pobi[1]));

  const pobi_score = Math.max(max_sum_p, max_mul_p);

  const max_sum_c = Math.max(Sum(crong[0]), Sum(crong[1]));
  const max_mul_c = Math.max(Mul(crong[0]), Mul(crong[1]));

  const crong_score = Math.max(max_sum_c, max_mul_c);

  if(pobi_score > crong_score) answer = 1;
  else if(pobi_score < crong_score) answer = 2;
  else if(pobi_score == crong_score) answer = 0;
  
  if(((pobi[0]%2)!=1) || (pobi[1]%2)!=0 || pobi[0]==1 || pobi[1]==400 || pobi[0] != (pobi[1]-1)) answer = -1;
  if(((crong[0]%2)!=1) || (crong[1]%2)!=0 || crong[0]==1 || crong[1]==400 || crong[0] != (crong[1]-1)) answer = -1;
  
  return answer;
}

function Sum(i){
  let sum = 0;

  do{
    sum += i % 10;
    i = Math.floor(i/10);
  }while(i > 0);

  return sum;
}

function Mul(i){
  let mul = 0;

  do{
    mul *= i % 10;
    i = Math.floor(i/10);
  }while(i > 0);

  return mul;
}

module.exports = problem1;
