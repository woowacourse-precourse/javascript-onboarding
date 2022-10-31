// Delete all duplicated characters.
function solve_cryptogram_helper(str) {
  let is_changed = false;
  let temp = "";
  for (let i = 0; i < str.length; ++i) {
    let j = i + 1;
    while (j < str.length && str[i] === str[j]) {
      j++;
    }
    if (j !== i + 1) {
      is_changed = true;
      i = j - 1;
    } else {
      temp += str[i];
    }
  }
  return [is_changed, temp];
}

function solve_cryptogram(str) {
  // Run until there is no change in the str.
  while (true) {
    const [is_changed, temp] = solve_cryptogram_helper(str);
    str = temp;
    if (!is_changed) {
      break;
    }
  }
  return str;
}

function problem2(cryptogram) {
  const answer = solve_cryptogram(cryptogram);
  return answer;
}

module.exports = problem2;
