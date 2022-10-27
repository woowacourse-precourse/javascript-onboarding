function problem6(forms) {}

function setName(forms) {
  const array = [];

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      array.push(forms[i][1].substr(j, 2));
    }
  }
  return array;
}

module.exports = problem6;
