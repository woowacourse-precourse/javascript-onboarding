const isOverlap = (answer, char) => {
  return answer[answer.length - 1] === char;
};

function problem2(cryptogram) {
  let stack = "";
  let recentDeletedCahr = "";
  [...cryptogram].forEach((char) => {
    if (isOverlap(stack, char)) {
      stack = stack.slice(0, stack.length - 1);
      recentDeletedCahr = char;
    }
    if (recentDeletedCahr !== char) {
      stack += char;
      recentDeletedCahr = "";
    }
  });

  return stack;
}

module.exports = problem2;
