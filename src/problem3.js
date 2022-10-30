const has369 = (num) => /[369]/.test(`${num}`);
const get369Count = (num) => `${num}`.match(/[369]+/g).join('').length;

function problem3(number) {
  const nums = Array.from({ length: number }, (_, index) => index + 1);

  return nums.reduce((count, num) => {
    if (has369(num)) return count + get369Count(num);
    return count;
  }, 0);
}

module.exports = problem3;
