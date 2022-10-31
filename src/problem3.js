function problem3(number) {
  const regex = /3|6|9/g;
  answer += (String(i).match(regex) || []).length;
}

module.exports = problem3;
