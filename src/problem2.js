function problem2(cryptogram) {
  var answer;
  if (validExceptions) {
    answer = deleteOverlap(cryptogram);
    return answer;
  }
  else {
    throw new Error("잘못된 입력입니다.");
  }
}

function deleteOverlap(cryptogram) {
  const stack = [cryptogram[0]];
  let index = 1;
  
  while (index < cryptogram.length) {  
    if (stack[stack.length-1] != cryptogram[index]) {
      stack.push(cryptogram[index]);
    }
    else {
      while (stack[stack.length - 1] == cryptogram[index]) {
        stack.pop();
      }
    }

    index++;
  }

  return stack.join("");
}

function validExceptions(cryptogram) {
  return (validRange(cryptogram) && validLetters(cryptogram));
}

function validRange(arr) {
  return (arr.length >= 1 && arr.length <= 1000);
}

function validLetters(str) {
  const reg = /^[a-z]*$/;

  return reg.test(str);
}

module.exports = problem2;