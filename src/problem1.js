//각 자리 합, 곱 중 최댓값을 반환하는 함수
function makeMax(n){
  let [add,mul]=[0,1];
  str_num = String(n);
  str_num.split('').forEach((num)=>{
      add+=parseInt(num);
      mul*=parseInt(num);
  });
  return Math.max(add,mul);
}

function problem1(pobi, crong){
  if (pobi[1]-pobi[0]!==1||crong[1]-crong[0]!==1){
      return -1;
  }
  const pobi_ans = Math.max.apply(null,
                   pobi.map((num)=>makeMax(num)));
  const crong_ans = Math.max.apply(null,
                   crong.map((num)=>makeMax(num)));
  const answer = pobi_ans<crong_ans? 2
                :(pobi_ans>crong_ans? 1 : 0);
  return answer;
}

module.exports = problem1;

//TODO
//1. index 사용 안하는 방향으로 코드 수정
//2. 변수명 의미 있는 변수명으로 수정
