function problem2(cryptogram) {
  const stack = new Array(cryptogram[0]);
  let duplicatedChar = ""; //3자 이상의 중복일 경우를 위해 pop한 글자를 저장하는 변수

  for (let i = 1; i < cryptogram.length; i++) {
    const top = stack.length - 1;
    if (stack[top] !== cryptogram[i] && duplicatedChar !== cryptogram[i]) {
      stack.push(cryptogram[i]);
      duplicatedChar = "";
    } else if (stack[top] === cryptogram[i]) duplicatedChar = stack.pop();
  }
  return stack.join("");
}

module.exports = problem2;
