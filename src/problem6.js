function problem6(forms) {
  let answer = [];
  let words = {};
  let duplicated = new Set();

  forms.forEach(([email, name]) => {
    words[email] = new Set();
    for (let i = 0; i < name.length - 1; i++) {
      words[email].add(name.slice(i, i + 2));
    }
  });

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

module.exports = problem6;
