function sliceByTwo(s) {
  const N = s.length;
  const out = new Set();
  for (let i = 0; i < N - 1; i++) {
    out.add(s.slice(i, i + 2));
  }
  return out;
}

function count(arr) {
  const cnt = new Map();
  arr.forEach((x) => {
    cnt.set(x, (cnt.get(x) || 0) + 1);
  });
  return cnt;
}

function getDups(names) {
  const twoSets = names.map(sliceByTwo);
  const twos = twoSets.flatMap((twoSet) => Array.from(twoSet));
  const cnt = count(twos);

  return new Set(
    Array.from(cnt)
      .filter(([k, v]) => v >= 2)
      .map(([k, v]) => k)
  );
}

function intersect(set1, set2) {
  const [small, large] = set1.size < set2.size ? [set1, set2] : [set2, set1];
  return new Set(Array.from(small).filter((x) => large.has(x)));
}

function nameInDups(name, dups) {
  const twos = sliceByTwo(name);
  return intersect(twos, dups).size;
}

function problem6(forms) {
  const names = forms.map(([_, name]) => name);
  const dups = getDups(names);

  return forms
    .filter(([_, name]) => nameInDups(name, dups))
    .map(([email, name]) => email)
    .sort();
}

// console.log(
//   problem6([
//     ["jm@email.com", "제이엠"],
//     ["jason@email.com", "제이슨"],
//     ["woniee@email.com", "워니"],
//     ["mj@email.com", "엠제이"],
//     ["nowm@email.com", "이제엠"],
//   ])
// );

module.exports = problem6;
