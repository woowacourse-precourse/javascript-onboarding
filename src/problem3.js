const countToLevel = require("./modules/problem3/countToLevel.js");
const countAll = require("./modules/problem3/countAll.js");

function problem3(number) {
  const level = number.toString().length;
  const clapsToLevel = countToLevel(level - 1);
  return countAll(number, clapsToLevel);
}

module.exports = problem3;
