function problem3(number) {
  var answer = 0;
  const reg = /[369]/g;
  let clap = [];

  for (let i = 1; i < number + 1; i++) {
    let num = String(i);

    if (num.match(reg) !== null) {
      for (let c = 0; c < num.match(reg).length; c++) {
        clap.push(num.match(reg)[c]);
      }
    }
  }
  
  answer = clap.length;

  return answer;
}

module.exports = problem3;
