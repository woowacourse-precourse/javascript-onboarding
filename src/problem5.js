function problem5(money) {
  var answer, fm, om, ft, ot, fh, oh, fi, ten, one;

  fm = parseInt(money / 50000);
  om = parseInt((money % 50000) / 10000);
  ft = parseInt((money % 10000) / 5000);
  ot = parseInt((money % 5000) / 1000);
  fh = parseInt((money % 1000) / 500);
  oh = parseInt((money % 500) / 100);
  fi = parseInt((money % 100) / 50);
  ten = parseInt((money % 50) / 10);
  one = parseInt(money % 10);

  answer = [fm, om, ft, ot, fh, oh, fi, ten, one];
  console.log(answer);
  return answer;
}

problem5(50237);
problem5(15000);

module.exports = problem5;
