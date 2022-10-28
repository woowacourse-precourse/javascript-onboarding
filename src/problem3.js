function problem3(number) {
  let clapCount = 0;
  let numberRange = [];
  for (let i = 1; i <= number; i++) {
    numberRange[i] = String(i);
    let check = numberRange[i].split("");
  }
}
function testCode() {
  //problem3(13);
  problem3(33);
}
testCode();
module.exports = problem3;
