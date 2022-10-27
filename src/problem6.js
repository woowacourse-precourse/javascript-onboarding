function validate_email_form(email) {
  return (
    email.includes("@email.com") && email.length >= 11 && email.length < 20
  );
}

function get_duplication(forms) {
  let map = new Map(); // substring, email
  let set = new Set(); // email
  for (let [email, name] of forms) {
    if (!validate_email_form(email)) {
      continue;
    }
    for (let i = 0; i < name.length - 1; ++i) {
      const temp = name.substr(i, 2); // substring
      if (map.has(temp)) {
        // Somebody uses this substring in the nickname.
        set.add(email);
        set.add(map.get(temp));
        continue;
      }
      // Nobody uses this substing in nickname yet.
      map.set(temp, email);
    }
  }
  return set;
}

function problem6(forms) {
  const set = get_duplication(forms);
  let answer = [...set];
  answer.sort();
  return answer;
}

module.exports = problem6;
