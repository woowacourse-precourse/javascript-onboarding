function problem6(forms) {
  let answer = [];
  let words = {};
  let duplicated = new Set();

  for (let [email, name] of forms) {
    words[email] = new Set();
    for (let i = 0; i < name.length - 1; i++) {
      words[email].add(name.slice(i, i + 2));
    }
  }
  for (let email in words) {
    console.log(words[email]);
  }

  for (let setKeyA in words) {
    for (let setKeyB in words) {
      if (setKeyA === setKeyB) continue;

      let intersect = new Set(
        [...words[setKeyA]].filter((w) => words[setKeyB].has(w))
      );

      if (intersect.size > 0) {
        duplicated.add(setKeyA, setKeyB);
      }
    }
  }

  answer = Array.from(duplicated).sort();

  return answer;
}

console.log(
  problem6([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ])
);

module.exports = problem6;
