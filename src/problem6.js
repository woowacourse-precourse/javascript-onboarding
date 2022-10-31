function validate_email_form(email) {
  return (
    email.includes("@email.com") && email.length >= 11 && email.length < 20
  );
}

function remove_duplicated_email(map) {
  let set = new Set();
  for (let substr of map.keys()) {
    let temp = new Set(map.get(substr));
    if (temp.size === 1) {
      continue;
    }
    for (let email of temp) {
      set.add(email);
    }
  }

  return set;
}

function get_duplication(forms) {
  let map = new Map(); // substr, [email]
  for (let [email, name] of forms) {
    if (!validate_email_form(email) || name.length === 1) {
      continue;
    }
    for (let i = 0; i < name.length - 1; ++i) {
      let temp_str = name.substr(i, 2);
      let email_array = [email];
      if (map.has(temp_str)) {
        email_array.push(...map.get(temp_str));
      }
      map.set(temp_str, email_array);
    }
  }
  remove_duplicated_email(map);
}

function problem6(forms) {
  const set = get_duplication(forms);
  let answer = [...set];
  answer.sort();
  return answer;
}

module.exports = problem6;
