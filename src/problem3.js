function problem3(number) {
  var number = Number(number);
  return count(number);
}
function count(number) {
  //13
  let result = 0;
  for (let cnt = 1; cnt <= number; cnt++) {
    //13
    let str = String(cnt); // 문자열 변환

    for (let i = 0; i < str.length; i++) {
      let chk = str.toString().substring(i, i + 1);
      if (chk == "3" || chk == "6" || chk == "9") {
        //해당 일때만

        result = result + 1;
      }
    }
  }
  return result;
}
let input = [13, 33];
// for (let i = 0; i < input.length; i++) {
//   console.log(`#${i + 1} ${problem3(input[i])}`);
// }

module.exports = problem3;
