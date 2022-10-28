function problem6(forms) {
  let map = new Map();
  let answer = [];
  forms.forEach((person) => {
    const [_, id] = person;
    for (let i = 0; i < id.length - 1; i++) {
      map.set(id.substring(i, i + 2), map.get(id.substring(i, i + 2)) + 1 || 1);
    }
  });
  forms.forEach((person) => {
    const [mail, id] = person;
    let dic = [];
    for (let i = 0; i < id.length - 1; i++) {
      dic.push(id.substring(i, i + 2));
    }
    for (let j = 0; j < dic.length; j++) {
      if (map.get(dic[j]) > 1) {
        answer.push(mail);
        break;
      }
    }
  });
  answer = new Set(answer);
  return [...answer].sort();
}

module.exports = problem6;
