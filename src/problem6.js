function crewNameArray(array) {
  let crewNameArr = [];

  array.forEach((item) => {
    crewNameArr.push(item[1]);
  });
  return crewNameArr;
}

function cutTwoCharArray(array) {
  const crewNameArr = crewNameArray(array);
  let twoCharNameArr = [];

  crewNameArr.forEach((item) => {
    let i = 0;

    for (; i < item.length - 1; i++) {
      twoCharNameArr.push(item.slice(i, i + 2));
    }
  });
  return twoCharNameArr;
}

function pushOverlapArray(array) {
  let overlapArray = [];
  let toCheckArray = [];

  array.forEach((twoCharName) => {
    if (toCheckArray.includes(twoCharName) === true) {
      overlapArray.push(twoCharName);
    }
    if (toCheckArray.includes(twoCharName) === false) {
      toCheckArray.push(twoCharName);
    }
  });
  return overlapArray;
}
function problem6(forms) {
  const twoCharNameArr = cutTwoCharArray(forms);
  const overlapArray = pushOverlapArray(twoCharNameArr);
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
