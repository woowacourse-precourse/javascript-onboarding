function problem6(forms) {
  const nickname = [];
  const finded_duplicate_nickname = [];
  const answer = [];
  let separated_name;

  for (let i = 0; i < forms.length; i++) {
    nickname.push(forms[i][1]);
  }

  separated_name = separate(nickname);

  finded_duplicate_nickname.push(...new Set(find_duplicate(separated_name)));

  for (let j = 0; j < forms.length; j++) {
    for (let k = 0; k < finded_duplicate_nickname.length; k++) {
      if (forms[j][1].includes(finded_duplicate_nickname[k])) {
        answer.push(forms[j][0]);
      }
    }
  }
  return Array(...new Set(answer.sort()));
}

function separate(arr) {
  const duplicate_nickname = [];

  for (let i = 0; i < arr.length; i++) {
    const separate_name = arr[i];
    for (let j = 0; j < separate_name.length - 1; j++) {
      duplicate_nickname.push(Array(separate_name[j], separate_name[j + 1]).join(""));
    }
  }
  return duplicate_nickname;
}

function find_duplicate(arr) {
  const duplicate = [];

  for (let i = 0; i < arr.length; i++) {
    const current_el = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (current_el === arr[j]) duplicate.push(current_el);
    }
  }
  return duplicate;
}

module.exports = problem6;
