function problem1(pobi, crong) {
  var answer;

  function except(user) {
    user.forEach((page) => {
      if (page === 1 || page === 2 || page === 399 || page === 400) return -1;
    });
    if (user[0] % 2 === 0 || user[1] % 2 !== 0) return -1;
    if (user[1] !== user[0] + 1) return -1;
    return 0;
  }
  let exception = except(pobi) || except(crong);

  return answer;
}

module.exports = problem1;
