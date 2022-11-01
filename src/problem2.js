// 문자열에 중복된 값을 반복해서 삭제하는 problem2 함수 구현

function checkLastDeleted(latestDeleted, currentValue) {
  if (latestDeleted !== null) {
    if (currentValue === latestDeleted) {
      return true;
    }
  }
  return false;
}

function checkStack(stack, currentValue) {
  if (stack[stack.length - 1] === currentValue) {
    stack.pop();
    return true;
  } else {
    stack.push(currentValue);
    return false;
  }
}

function problem2(cryptogram) {
  const stack = [];
  let latestDeleted = null;
  for (let i = 0; i < cryptogram.length; i++) {
    if (checkLastDeleted(latestDeleted, cryptogram[i])) {
      continue;
    } else {
      latestDeleted = null;
    }

    if (checkStack(stack, cryptogram[i])) {
      latestDeleted = cryptogram[i];
    }
  }
  return stack.join("");
}

module.exports = problem2;
