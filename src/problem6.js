function problem6(forms) {
  let user;

  user = String(forms).split(",");

  let temp = [];
  for (let i = 1; i < user.length; i += 2) {
    temp.push(overlapNickname(user[i]));
  }
  console.log(temp);
}

function overlapNickname(nickname) {
  let overlap = new Array();

  for (let i = 0; i < nickname.length; i++) {
    overlap.push(nickname.substr(i, i + 2));
  }
  return overlap;
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
