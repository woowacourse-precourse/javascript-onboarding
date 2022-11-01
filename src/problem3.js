const container = [0,0,0,1,0,0,1,0,0,1];
function problem3(number) {
  var answer = 0;
  for(let i = 1; i <= number; i++){
    answer += countClap(i);
  }
  console.log(answer);
  return answer;
}
function countClap(number){
  if(number <= 2) return 0;
  let count = 0;
  let num = number;
 while(num != 0){
    count += container[num % 10];
    num = parseInt(num /10);
  }
 
  return count;
}
/*처음에는 재귀로 풀었는데 9000대 부터 오버스택이 떴다.
왜 인지 생각해보았는데 return count + countClap(number-1);
하면 아예 맨 밑까지 갔다가 하나씩 반환화니까 오버스택이 뜨는 거였음
그래서 호출 부분을 아예 밖으로 빼서 구할때마다 값이 나오게 해서 오버스택을 피했다
결과적으로 이러나 저러나 시간복잡도는 n인듯?
*/
module.exports = problem3;
