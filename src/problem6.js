function crewNameArray(duplicateArray) {
  let crewNameArr = [];

  duplicateArray.forEach((item) => {
    crewNameArr.push(item[1]);
  });
  return crewNameArr;
}

function cutTwoLetterArray(array) {
  const crewNameArr = crewNameArray(array);
  let twoLetterNameArr = [];

  crewNameArr.forEach((name) => {
    let i = 0;

    for (; i < name.length - 1; i++) {
      twoLetterNameArr.push(name.slice(i, i + 2));
    }
  });
  return twoLetterNameArr;
}

function pushOverlapArray(array) {
  let overlapArray = [];
  let toCheckArray = [];

  array.forEach((twoLetterName) => {
    if (toCheckArray.includes(twoLetterName) === true) {
      overlapArray.push(twoLetterName);
    }
    if (toCheckArray.includes(twoLetterName) === false) {
      toCheckArray.push(twoLetterName);
    }
  });
  return overlapArray;
}
function problem6(forms) {
  const twoLetterNameArr = cutTwoLetterArray(forms);
  const overlapArray = pushOverlapArray(twoLetterNameArr);
  let answer = [];

  forms.forEach((nameAndEmail) => {
    let i = 0;

    for (; i < nameAndEmail.length; i++) {
      if (overlapArray.includes(nameAndEmail[1].slice(i, i + 2))) {
        answer.push(nameAndEmail[0]); //전체 배열에서 중복된 이름이 있는 지 확인 후 있다면 그 이메일을 반환하는 함수
      }
    }
  });

  return answer.sort();
}

module.exports = problem6;
