function problem6(forms) {
  let user = [];

  user = String(forms).split(",");

  console.log(user);
}
function testCode() {
  problem6([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ]);
}
testCode();
module.exports = problem6;
