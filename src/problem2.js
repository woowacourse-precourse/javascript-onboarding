function problem2(cryptogram) {

  let array = cryptogram.split("");

  // 전체에서 중복되는 문자 구하기
  const findDuplicates = function(arr) {
    let filtered = arr.filter((item, index) => arr.indexOf(item) !== index)
    return [...new Set(filtered)];
  }
  const duplicateArray = findDuplicates(array);

  let sum = 1;
  // 전체에서 연속되는 문자가 없을 때까지 while문 돌기
  while(sum !== 0) {
    let indexArray = []
    for (let i = 1; i < array.length; i++) {
      for (let j of duplicateArray) {
        // 연속되는 글자의 인덱스를 index.Array에 추가
        if (array[i] === j && array[i-1] === j) {
          indexArray.push(i-1, i);
        }
      }
    }

    // 실제 글자 배열에서 연속되는 글자 지우기
    indexArray = [...new Set(indexArray)];
    for (let i of indexArray) {
      delete array[i];
    };
    array = array.filter((e) => e !== '');

    // 연속되는 문자가 있는지 확인하여 연속되지 않으면 0, 연속되면 1 추가
    let trueFalseArray = [];
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== array[i-1]) {
        trueFalseArray.push(0);
      } else {
        trueFalseArray.push(1);
      }
    }
    
    // sum이 0: 연속되는 문자가 더이상 없음, sum > 1: 연속되는 문자가 아직 남아있음
    sum = 0;
    for (let i of trueFalseArray){
      sum += i
    }
  }
  
  let answer = array.join('');
  return answer;
}

module.exports = problem2;

console.log(problem2("zyelleyz"));
