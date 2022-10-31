// @ts-check

/**
 * @param {string[][]} forms
 * @returns {string[]}
 */
function problem6(forms) {
  const res = [];
  const seqArr = [];
  const hashMap = new Map();
  const mailObj = {};

  // 같은 글자가 연속하는 모든 경우 & 어느 이메일에 속하는지 구하기
  forms.forEach((form) => {
    const seq = [
      ...form[1]
        .split("")
        .map((_, i) => form[1][i] + form[1][i + 1])
        .slice(0, -1),
    ];
    seqArr.push(...new Set(seq));
    mailObj[form[0]] = seq;
  });

  // 같은 글자가 연속하는 경우가 서로 다른 이메일에서 몇 개 존재하는지 구하기
  seqArr.forEach((seq) =>
    hashMap.set(seq, hashMap.has(seq) ? hashMap.get(seq) + 1 : 1)
  );

  // 2개 이상 존재하는 경우, 해당 경우가 속한 이메일 반환
  for (const mail in mailObj) {
    for (let i = 0; i < mailObj[mail].length; i++) {
      if (hashMap.get(mailObj[mail][i]) > 1) {
        res.push(mail);
        break;
      }
    }
  }
  return res.sort();
}

console.log(
  problem6([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ])
); // ["jason@email.com", "jm@email.com", "mj@email.com"]

module.exports = problem6;
