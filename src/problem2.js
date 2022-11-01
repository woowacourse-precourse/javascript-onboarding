function problem2(cryptogram) { // 단어하나를 받는다
  let answer = [];
  const cryptogram_add = [...cryptogram];
  // console.log("단어 배열변경",cryptogram_add)
  // 단어를 알파벳 별로 배열로 쪼갠다

  answer.push(cryptogram_add[0]);
  for (i = 1; i < cryptogram_add.length; i++) {
    const curr = cryptogram_add[i];
    if (curr != answer[answer.length - 1]) {
      answer.push(curr);
    } else {
      answer.pop();
      while (curr === cryptogram_add[i + 1]) {
        i++;
      }
    }
    // console.log("단어 중복값 삭제",answer)
  }
  // 배열을 순회하면서, 중복시 삭제
  // 중복 삭제 배열 반환

  answer = answer.join('');
  // console.log("단어확인",answer)

  return answer;
  // 마지막에 만들어진 단어를 리턴한다
}

module.exports = problem2;
