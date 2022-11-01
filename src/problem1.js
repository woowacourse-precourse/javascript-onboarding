function problem1(pobi, crong) {
  function sum(n) {
    let plus = 0;
    do {
      plus += n % 10;
      n = Math.floor(n / 10);
    } while (n > 0);
    return plus;
  }

  function multiple(n) {
    if (n > 100) {
      const a = Math.floor(n / 100);
      const b = Math.floor((n % 100) / 10);
      const c = (n % 100) % 10;
      return a * b * c;
    } else if (n >= 10) {
      const a = Math.floor(n / 10);
      const b = n % 10;
      return a * b;
    } else return n;
  }

  function array(name) {
    return [sum(name[0]), sum(name[1]), multiple(name[0]), multiple(name[1])];
  }

  function max(name) {
    return Math.max.apply(null, array(name));
  }

  var answer;
  if (max(pobi) > max(crong)) {
    var answer = 1;
  } else if (max(pobi) < max(crong)) {
    var answer = 2;
  } else if (max(pobi) === max(crong)) {
    var answer = 0;
  }
  if (pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1) {
    var answer = -1;
  }
  return answer;
}

console.log(problem1([99, 102], [211, 212]));

module.exports = problem1;
