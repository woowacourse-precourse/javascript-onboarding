function problem6(forms) {
  let wordArray = checkDuplicateWord(forms);
  return Object.keys(removeDuplicateArray(wordArray)).sort();
}
function checkDuplicateWord(forms) {
  const result = [];
  forms.forEach((element, startPoint) => {
    for (let i = startPoint + 1; i < forms.length; i++) {
      for (let j = 0; j < element[1].length - 1; j++) {
        if (forms[i][1].search(element[1].substr(j, 2)) !== -1) {
          result.push(element, forms[i]);
        }
      }
    }
  });
  return result;
}

function removeDuplicateArray(wordArray) {
  let wordObject = wordArray.reduce((obj, curr) => {
    obj[curr[0]] = "a";
    return obj;
  }, {});
  return wordObject;
}

problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]);
module.exports = problem6;
