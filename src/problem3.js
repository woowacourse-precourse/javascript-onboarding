const CLAP_NUM_REG = /3|6|9/g;

function getMatchedNumCount(num) {
  return String(num).match(CLAP_NUM_REG).length;
}

function problem3(number) {
  var clapCount = 0;

  for (var num = 1; num <= number; num++) {
    if (CLAP_NUM_REG.test(num)) clapCount += getMatchedNumCount(num);
    //clapCount += (String(num).match(CLAP_NUM_REG) || []).length;
  }

  return clapCount;
}

module.exports = problem3;
