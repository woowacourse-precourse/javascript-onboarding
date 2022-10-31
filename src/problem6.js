function problem6(forms) {
  let answer = [];
  forms.forEach((ele, nameIdx) => {
    for (let i = nameIdx + 1; i < forms.length; i++) {
      for (let j = 0; j < ele[1].length; j++) {
        if (forms[i][1].search(ele[1].substring(j, 2)) !== -1) {
          answer.push(ele, forms[1]);
        }
      }
    }
  });

  const reduceAnswer = answer.reduce((pre, cur) => {
    pre[cur[0]] = null;
    return pre;
  }, {});

  return Object.keys(reduceAnswer).sort();
}
let forms = [
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
];
console.log(problem6(forms));

module.exports = problem6;
