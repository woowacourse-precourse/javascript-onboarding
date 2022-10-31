function problem6(forms) {
  var answer;
  let name = [];
  let email = [];
  let result = [];

  for (let item of forms) {
    name.push(item[1]);
  }
  for (let mail of forms) {
    email.push(mail[0]);
  }

  for (let i = 0; i < name.length; i++) {
    let person1 = name[i];
    for (let j = i + 1; j < name.length; j++) {
      let person2 = name[j];
      for (let k = 0; k < person1.length; k++) {
        let overlapNameCheck = person1.slice(k, k + 2);

        if (
          person1.includes(overlapNameCheck) &&
          person2.includes(overlapNameCheck) &&
          person1 !== person2
        ) {
          result.push(email[i]);
        }
      }
    }
  }
  const set = new Set(result);
  const newArr = [...set];
  return newArr.sort();
}

module.exports = problem6;
