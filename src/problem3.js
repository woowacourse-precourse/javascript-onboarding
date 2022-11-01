function problem3(number) {
  let cnt = 0;
  for (let i = 0; i < number; i++) {
    let str = "" + (i + 1);
    // console.log(str);
    for (let j = 0; j < str.length; j++) {
      if (str[j] == 3 || str[j] == 6 || str[j] == 9) {
        cnt += 1;
      }
    }
  }
  return cnt;
}
// console.log(problem3(13));
module.exports = problem3;
