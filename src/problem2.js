function findDups(s) {
  const N = s.length;
  const out = [];

  let [prev_c, prev_i] = ["", -1];
  s = s + "A"; // dummy 'A' to clean up
  for (let i = 0; i <= N; i++) {
    const c = s[i];
    // consecutive
    if (prev_c === c) {
      continue;
    }

    // not consecutive
    if (i - prev_i >= 2) {
      out.push([prev_c, prev_i, i - prev_i]);
    }

    [prev_c, prev_i] = [c, i];
  }

  return out;
}

function removeDups(s, dups) {
  const out = Array.from(s);
  for (let [_, i, cnt] of dups) {
    for (let j = 0; j < cnt; j++) {
      out[i + j] = "";
    }
  }
  return out.join("");
}

function problem2(cryptogram) {
  let s = cryptogram;
  while (true) {
    const dups = findDups(s);
    if (!dups.length) {
      break;
    }
    s = removeDups(s, dups);
  }
  return s;
}

// console.log(problem2("browoanoommnaon"));
// console.log(problem2("zyelleyz"));

module.exports = problem2;
