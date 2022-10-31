function nameIncludes(result, nameArray, findName, forms, i, j) {
  if (nameArray[j].includes(findName[i])) {
    return result.push(forms[j][0]);
  }
}

function problem6(forms) {
  const nameArray = forms.map((v) => v[1]);

  const parseName = [];
  for (let i = 0; i < nameArray.length; i++) {
    for (let j = 0; j < nameArray[i].length - 1; j++) {
      parseName.push(nameArray[i][j] + nameArray[i][j + 1]);
    }
  }

  let findName = [];
  const join = nameArray.join();

  for (let i = 0; i < parseName.length; i++) {
    const regexp = new RegExp(parseName[i], 'g');
    if (join.match(regexp).length >= 2) {
      findName.push(parseName[i]);
    }
  }

  findName = [...new Set(findName)];

  let result = [];
  for (let i = 0; i < findName.length; i++) {
    for (let j = 0; j < nameArray.length; j++) {
      nameIncludes(result, nameArray, findName, forms, i, j);
    }
  }

  return [...new Set(result.sort())];
}

module.exports = problem6;
