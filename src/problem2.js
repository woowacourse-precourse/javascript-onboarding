function problem2(cryptogram) {
  let answer;

  while (true) {
    const [hasDuplicates, deleted] = deleteDuplicate(cryptogram);
    cryptogram = deleted;

    if (!hasDuplicates || !deleted) {
      break;
    }
  }

  answer = cryptogram;

  return answer;
}

function deleteDuplicate(characters) {
  let hasDuplicates = false;
  let resultStack = [];
  let currentDuplicate = false;

  for (let c of String(characters)) {
    if (!resultStack) {
      resultStack.push(c);
    } else if (resultStack.at(-1) === c) {
      hasDuplicates = true;
      currentDuplicate = true;
    } else {
      if (currentDuplicate) {
        resultStack.pop();
        currentDuplicate = false;
      }
      resultStack.push(c);
    }
  }

  if (currentDuplicate) {
    resultStack.pop();
  }

  return [hasDuplicates, resultStack.join("")];
}

module.exports = problem2;
