function countNum(arr) {
  let count = 0;
  arr.forEach(function(curVal) {
    if (curVal == 3 || curVal == 6 || curVal == 9)
      count++;
  });
  return count;
}

function findThreeSixNine(number) {
  let count = 0;
  for (let curNum = 0; curNum <= number; curNum++) {
    count += countNum(Array.from(String(curNum)));
  }
  return count;
}

function problem3(number) {
  var answer = findThreeSixNine(number);
  return answer;
}

module.exports = problem3;


/* 
구현
1. curNum=0부터 number까지 +1씩 늘려가며 현재 curNum을 배열로 변경하는 함수
2. 배열의 index를 돌며 3이나 6이나 9가 있으면 count++후 리턴하는 함수
3. 총 count 리턴
 */
