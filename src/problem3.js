function problem3(number) {
  var answer;
  let count = 0;
  let arr = [];
  for (let i = 1; i <= number; i++) {
    arr = i.toString().split("");
    if (arr.includes("3") || arr.includes("6") || arr.includes("9")) {
      count++;
      //3,6,9 가 중복
      let setCollection = new Set(arr);
      if (setCollection.size < arr.length) {
        count += arr.length - setCollection.size;
      }
    }
  }
  answer = count;
  return answer;
}

module.exports = problem3;

// 기능 목록
// 1. number 값을 문자 배열로 분해한다.
// 2. 3,6,9 값이 있는지 비교해, count 값을 올려 반환한다.
// 3. 예외 : 33 -> 박수 2번
