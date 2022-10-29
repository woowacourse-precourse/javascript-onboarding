function problem6(forms) {
  var answer = process(forms);
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
  return result.sort();
}
function duplicateCheck(forms, result, start, patterns) {
  let index = start + 1;
  while (index < forms.length) {
    patterns.forEach((pattern) => {
      if (forms[index][1].includes(pattern)) {
        resultPush(result, forms[index][0]);
        resultPush(result, forms[start][0]);
      }
    });
    index++;
  }
}
function resultPush(result, target) {
  if (!result.includes(target)) result.push(target);
}
module.exports = problem6;
