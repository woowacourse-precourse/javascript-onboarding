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
    if (stack[stack.length - 1] == text[i]) {
      dupeCount++;
      continue;
    }
    if (dupeCount) {
      dupeCount = 0;
      stack.pop();
    }
    if (stack[stack.length - 1] == text[i]) stack.pop();
    else stack.push(text[i]);
  }
  if (dupeCount) stack.pop();
  return stack.join("");
};

module.exports = problem2;
