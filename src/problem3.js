function problem3(number) {
  let answer = 0;

  for (let i = 1; i < (number + 1); i++) {
    if (i.toString().split("").includes("3")) {
      answer += i.toString().split("3").length - 1;
    }
    if (i.toString().split("").includes("6")) {
      answer += i.toString().split("6").length - 1;
    }
    if (i.toString().split("").includes("9")) {
      answer += i.toString().split("9").length - 1;
    }
  }

  return answer;
}

// console.log(problem3(13)); // 4
// console.log(problem3(33)); // 14
// console.log(`${'3' in ['1', '2', '3']}`);
// console.log(`${['1', '2', '3'].includes('3')}`);
// console.log(`${'123'.split("")}`);
// console.log(`${[...'123']}`);

module.exports = problem3;
