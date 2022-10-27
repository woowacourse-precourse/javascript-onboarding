function problem2(cryptogram) {
  const answerStack = [cryptogram[0]]; 
  let duplicateChar = '';   
  for (let i = 1; i < cryptogram.length; i += 1) {
    if (duplicateChar === cryptogram[i]) continue;
    if (answerStack[answerStack.length - 1] === cryptogram[i]) duplicateChar = answerStack.pop();
    else if (answerStack[answerStack.length - 1] !== cryptogram[i]) answerStack.push(cryptogram[i]);
  }
  return answerStack.join('');
}

module.exports = problem2;