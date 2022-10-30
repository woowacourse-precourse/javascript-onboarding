//각 자리 합, 곱 중 최댓값을 반환하는 함수
const makeMax = (n) => {
  let [a,b]=[0,1];
  n = String(n);
  for(let i=0; i<n.length; i++){
      a+=parseInt(n[i]);
      b*=parseInt(n[i]);
  }
  return Math.max(a,b);
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
