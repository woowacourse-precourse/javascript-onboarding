function problem3(number) {
  var answer,
    i,
    j,
    clap_num,
    count = 0;

  for (i = 0; i < number; i++) {
    clap_num = String(i + 1);
    for (j = 0; j < clap_num.length; j++) {
      if (clap_num[j] == 3 || clap_num[j] == 6 || clap_num[j] == 9) {
        count += 1;
      }
    }
  }

  console.log(count);
  return answer;
}
problem3(13);
problem3(33);

module.exports = problem3;
