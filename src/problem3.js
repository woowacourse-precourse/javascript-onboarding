function problem3(number) {
  let cnt = 0;
  for (i = 1; i <= number; i++)
    (i + "").split("").forEach(function (num) {
      if (num % 3 === 0 && num !== "0") cnt += 1;
    });
  console.log(cnt);
  return cnt;
}
module.exports = problem3;
