function problem3(number) {
  let str = "";
  for (let i = 1; i <= number; i++)
    str += i.toString();
  return str.replace(/[^369]/g, "").length;
}
module.exports = problem3;
