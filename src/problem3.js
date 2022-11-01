function problem3(number) {
  function get369Count(num) {
    if (num === 1) return 0;
    let str = String(num);
    let currentNum369Count = (str.match(/[3,6,9]/g) || []).length;
    return currentNum369Count + get369Count(num - 1);
  }

  return get369Count(number);
}

module.exports = problem3;
