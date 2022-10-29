function problem6(forms) {
  var answer;
  return answer;
}
function makePatterns(nickname) {
  const resultArray = [];
  for (let x = 0; x < nickname.length - 1; x++)
    resultArray.push(nickname.substr(x, 2));
  return resultArray;
}
function process(forms) {
  let x = 0;
  const result = [];
  for (x = 0; x < forms.length; x++) {
    const patterns = makePatterns(forms[x][1]);
    duplicateCheck(forms, result, x, patterns);
  }
  return result;
}
function duplicateCheck(forms, result, start, patterns) {
  let index = start + 1;
  while (index < forms.length) {
    patterns.forEach((pattern) => {
      if (forms[index][1].includes(pattern)) {
      }
    });
    index++;
  }
}
module.exports = problem6;
