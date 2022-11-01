function problem6(forms) {
  let map = new Map();
  collectSplitedNickname(forms, map);
  let answer = selectDuplicatedNickname(forms, map);
  answer = new Set(answer);
  return [...answer].sort();
}

function collectSplitedNickname(forms, map) {
  forms.forEach((person) => {
    const [_, id] = person;
    for (let i = 0; i < id.length - 1; i++) {
      map.set(id.substring(i, i + 2), map.get(id.substring(i, i + 2)) + 1 || 1);
    }
  });
}

function selectDuplicatedNickname(forms, map) {
  let selectedMail = [];
  forms.forEach((person) => {
    const [mail, id] = person;
    let dic = [];
    for (let i = 0; i < id.length - 1; i++) {
      dic.push(id.substring(i, i + 2));
    }
    for (let j = 0; j < dic.length; j++) {
      if (map.get(dic[j]) > 1) {
        selectedMail.push(mail);
        break;
      }
    }
  });
  return selectedMail;
}

module.exports = problem6;
