// test sample 추가
console.log(problem2("bronnaon"));

function problem2(cryptogram) {
  // stack 선언
  let arr = [cryptogram[0]];

  // stack에 하나씩 push
  // 중복 없을 때까지 반복
  for (let i = 1; i < cryptogram.length; i++) {
    // 연속하는 중복 문자 있으면 pop
    if (arr[i - 1] === cryptogram[i]) {
      arr.pop();
    } else {
      arr.push(cryptogram[i]);
    }
  }

  // 배열 원소를 문자열로
  answer = arr.join("");

  return answer;
}

module.exports = problem2;
