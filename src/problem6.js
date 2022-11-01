const EMAIL = 0;
const NICKNAME = 1;
function hasOverlap(a, b) {
  for (let i = 0; i < a.length - 1; i++) {
    const word = a.slice(i, i + 2);
    if (b.indexOf(word) !== -1) return 1;
  }
  return 0;
}
function getEmailSet(forms) {
  const emailSet = new Set();
  const LEN = forms.length;
  for (let i = 0; i < LEN - 1; i++) {
    for (let j = i + 1; j < LEN; j++) {
      if (hasOverlap(forms[i][NICKNAME], forms[j][NICKNAME])) {
        emailSet.add(forms[i][EMAIL]);
        emailSet.add(forms[j][EMAIL]);
      }
    }
  }
  return Array.from(emailSet);
}

function problem6(forms) {
  var answer;
  const unsortedEmails = getEmailSet(forms);
  answer = unsortedEmails.sort();
  return answer;
}
module.exports = problem6;
