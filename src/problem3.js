const has369 = (num) => /[369]/.test(`${num}`);
const get369Count = (num) => `${num}`.match(/[369]+/g).join('').length;

function problem3(number) {
  const nums = Array.from({ length: number }, (_, index) => index + 1);

  return nums.reduce((acc, num) => {
    if (has369(num)) return acc + get369Count(num);
    return acc;
  }, 0);
}

module.exports = problem3;
