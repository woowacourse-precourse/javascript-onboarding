function problem1(pobi, crong) {
  // 예외처리
  if(!checkLisk(pobi) || !checkLisk(crong)) {
    return -1
  }
   let answer = 0;
   if(maxValue(pobi) > maxValue(crong)) return answer = 1
   if(maxValue(pobi) < maxValue(crong)) return answer = 2
   return answer;    
  }
  // console.log(problem1([99,102], [211,212]))
module.exports = problem1;

// 예외처리
function checkLisk(check){
  // 배열의 길이는 2가 되어야 한다
  if(check.length !== 2) return false
  // 배열의 인덱스의 각 값이 1 ~ 400 사이의 값이어야 한다.
  if(!check[0]>=1 && !check[1]<=400) return false
  // 배열의 숫자는 왼쪽 페이지 번호, 오른쪽 페이지 번호 순서대로 들어있다.
  if( check[0]+1 !== check[1]) return false
  return true
}
console.log(checkLisk([99,102]))

//  각 자리수 마다 함수를 적용 해 가장 큰 수를 구하는 함수
function maxValue(arrNum){
  let addMax = arrNum.map(item => addNum(item))
  let mulMax = arrNum.map(item => mulNum(item))
  return Math.max(...addMax, ...mulMax)
 }

// 두 페이지 중 하나의 배열을 가져와 더한 값을 반환하는 함수
function addNum(pageNum){
  const value = pageNum.toString().split('')
  .reduce((acc, cur) => acc + parseInt(cur, 10),0)
  return value
};
  // console.log(addNum([97]))


  // 두 페이지 중 하나의 배열을 가져와 곱한 값을 반환하는 함수
  function mulNum(pageNum){
    const value = pageNum.toString().split('')
    .reduce((acc, cur) => acc * parseInt(cur,10), 1)
    return value
  }
// console.log(mulNum([98]))