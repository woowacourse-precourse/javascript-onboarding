function problem4(word) {
  var answer;
  var lower = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  var upper = [];
  for (var i = 0; i < lower.length; i++) {
    var up = lower[i].toUpperCase();
    upper.push(up);
  }
  var reverse_lower = [...lower].reverse();
  var reverse_upper = [...upper].reverse();

  var check = word.split('');

  for (var i = 0; i < word.length; i++) {
    check[i] = check[i].replace(
      lower[lower.indexOf(check[i])],
      reverse_lower[lower.indexOf(check[i])]
    );
    check[i] = check[i].replace(
      upper[upper.indexOf(check[i])],
      reverse_upper[upper.indexOf(check[i])]
    );
  }
  answer = check.join('');

  return answer;
}

module.exports = problem4;
