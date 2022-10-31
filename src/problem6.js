function problem6(forms) {
  let people_name = [];

  for (let i in forms) {
    people_name.push(forms[i][1]);
  }

  let people_object = {};
  for (let i in forms) {
    people_object[forms[i][1]] = forms[i][0];
  }

  let result = [];

  for (let i = 0; i < people_name.length; i++) {
    let person1 = people_name[i];

    for (let j = 0; j < people_name.length - 1; j++) {
      let person2 = people_name[j + 1];

      for (let k = 0; k < person1.length - 1; k++) {
        const nickname_check = person1.slice(k, k + 2);

        if (
          person1.includes(nickname_check) &&
          person2.includes(nickname_check) &&
          person1 !== person2
        ) {
          result.push(people_object[person1]);
          result.push(people_object[person2]);

          result = [...new Set(result)].sort();
        }
      }
    }
  }

  var answer = result;
  return answer;
}

module.exports = problem6;
