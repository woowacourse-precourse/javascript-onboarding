function problem3(number) {
  function get369Count(num) {
    let str = String(num);
    return (str.match(/[3,6,9]/g) || []).length;
  }

  let answer = new Array(number)
    .fill("")
    .map((_, index) => index + 1)
    .reduce((acc, curr) => acc + get369Count(curr), 0);

  return answer;
}

module.exports = problem3;
