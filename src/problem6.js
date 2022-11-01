function isInvalidName(name1, name2) {
  const name1Length = name1.length;
  const name2Length = name2.length;

  for (let i = 0; i < name1Length - 1; i++) {
    for (let j = 0; j < name2Length - 1; j++) {
      if (name1[i] === name2[j] && name1[i + 1] === name2[j + 1]) {
        return true;
      }
    }
  }
  return false;
}

function invalidEmails(forms) {
  const result = [];
  for (student of forms) {
    let name = student[1];
    for (target of forms) {
      if (student === target) {
        continue;
      }
      targetName = target[1];
      if (isInvalidName(name, targetName)) {
        result.push(student[0]);
        break;
      }
    }
  }

  return result;
}

function problem6(forms) {
  let answer;
  answer = invalidEmails(forms).sort();
  return answer;
}

module.exports = problem6;
