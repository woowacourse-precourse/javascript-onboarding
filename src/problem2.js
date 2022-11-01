function problem2(cryptogram) {
  const answer = removeConsecutiveDuplicates(cryptogram);
  return answer;
}
//input: 'afcbbbcfaacf'
//expected output: 'acf'
const removeConsecutiveDuplicates = (text) => {
  const stack = [text[0]];
  let dupeCount = 0;
  for (let i = 1; i < text.length; i++) {
    let top = stack[stack.length - 1];
    if (isEqual(top, text[i])) {
      dupeCount++;
      continue;
    }
    if (dupeCount) {
      dupeCount = 0;
      stack.pop();
    }
    top = stack[stack.length - 1];
    if (isEqual(top, text[i])) stack.pop();
    else stack.push(text[i]);
  }
  if (dupeCount) stack.pop();
  return stack.join("");
};

const isEqual = (a, b) => {
  return a === b;
};

module.exports = problem2;
