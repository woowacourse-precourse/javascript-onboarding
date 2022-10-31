function problem6(forms) {
  let emailSet = new Set([]);
  let sameNameCount = {};
  let getName = [];

  for (let i = 0; i < forms.length; i++) {
    // 각 배열의 이름 가져오기
    getName[i] = forms[i][1];
    let name = getName[i];

    nameTwoWordsSave(name, sameNameCount);
  }

  for (let i = 0; i < forms.length; i++) {
    let name = getName[i];
    let email = forms[i][0];

    addEmail(name, sameNameCount, emailSet, email);

    // for (let j = 0; j < getName[i].length - 1; j++) {
    //   let nameCheck = getName[i].slice(j, j + 2);

    //   if (sameNameCount[nameCheck] > 1) emailSet.add(forms[i][0]);
    // }
  }

  const answer = Array.from(emailSet).sort();

  return answer;
}

function nameTwoWordsSave(name, saveName) {

  for (let i = 0; i < name.length - 1; i++) {
    // 이름의 두 글자 가져오기
    let nameCheck = name.slice(i, i + 2);

    // 이름의 두 글자를 가져온 Key 값이 존재하면 값을 +1씩 아니면 1
    if (saveName[nameCheck]) saveName[nameCheck]++;
    if (!saveName[nameCheck]) saveName[nameCheck] = 1;
  }

  return saveName;
}

function addEmail(name, saveName, emailSet, getEmail) {
  for (let i = 0; i < name.length - 1; i++) {
    let nameCheck = name.slice(i, i + 2);

    if (saveName[nameCheck] > 1) emailSet.add(getEmail);
  }

  return emailSet;
}

module.exports = problem6;
