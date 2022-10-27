// 의사 코드 작성
// 1. cryptogram의 첫 문자를 새로운 배열에 push
// 2. 새로운 배열에 들어가있는 문자와 이제 들어올 문자를 비교해서 같으면 pop
// 3. 하지만 위 과정을 여러번 거쳐서 더 이상 연속되는 중복 문자가 없어야 함

function problem2(cryptogram) {
  let answer = [];
  let cryptogramToArr = [...cryptogram];
  let confirmDuplicate = cryptogramToArr[0];
  
  answer.push(cryptogramToArr[0]);
  
  for (let i=1;i<cryptogramToArr.length;i++) {
    if (cryptogramToArr[i] === confirmDuplicate) {
      answer.pop();
    } else {
      answer.push(cryptogramToArr[i]);
      confirmDuplicate = cryptogramToArr[i];
    }
  }
  
  if (!check(answer)) return problem2(answer.join(""));
  else return answer.join("");
}

function check(array) {
  for(let i=0;i<array.length-1;i++) {
    if (array[i] === array[i + 1]) {
      return false;
    }
  }
  return true;
}

module.exports = problem2;
