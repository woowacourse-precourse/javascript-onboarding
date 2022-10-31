//각 자리 합, 곱 중 최댓값을 반환하는 함수
const makeMax = (n) => {
  let [add,mul]=[0,1];
  str_num = String(n);
  str_num.split('').forEach((num)=>{
      add+=parseInt(num);
      mul*=parseInt(num);
  });
  return Math.max(add,mul);
}

function problem1(pobi, crong){
  let answer;
  if (pobi[1]-pobi[0]!==1||crong[1]-crong[0]!==1){
      return -1;
  }
  let max_arr = [...pobi,...crong]
  for(let i=0; i<4; i++){
      max_arr[i] = makeMax(max_arr[i]);
  }
  const [p, c] = [Math.max(max_arr[0],max_arr[1]),Math.max(max_arr[2],max_arr[3])];
  answer = p<c?2:(p>c?1:0);
  return answer;
}

module.exports = problem1;

//TODO
//1. index 사용 안하는 방향으로 코드 수정
//2. 변수명 의미 있는 변수명으로 수정
