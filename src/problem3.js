function problem3(number) {
  let num_arr = [];
  for (let i = 1; i <= number; i++) {
    num_arr.push(i);
  }

  let stringnum = String(num_arr);
  let splited_number_arr = stringnum.split("");
  let count = 0;
  for (let i = 0; i < splited_number_arr.length; i++) {
    if (splited_number_arr[i] === "3") {
      count++;
    }
  }
  let count2 = 0;
  for (let i = 0; i < splited_number_arr.length; i++) {
    if (splited_number_arr[i] === "6") {
      count2++;
    }
  }

  let count3 = 0;
  for (let i = 0; i < splited_number_arr.length; i++) {
    if (splited_number_arr[i] === "9") {
      count3++;
    }
  }
  let answer = count + count2 + count3;

  return answer;
}
///제한사항은?

module.exports = problem3;
