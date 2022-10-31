function problem6(forms) {
  let answer = [];
  forms.forEach((ele, nameIdx) => {
    console.log(ele, nameIdx);
  });
  return answer;
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
