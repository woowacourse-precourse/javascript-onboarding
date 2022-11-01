function problem3(number) {
  var count = 0;
  for (var i = 1; i <= number; i++) count += check_369(i);
  return count;
}

function check_369(num) {
  var count = 0;
  while (true) {
    if (num % 10 == 3 || num % 10 == 6 || num % 10 == 9) count++;
    num = Math.floor(num / 10);
    if (num == 0) break;
  }
  return count;
}

module.exports = problem3;
