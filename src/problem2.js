function problem2(cryptogram) {
  var answer = '';
  var ary = cryptogram.split('');
  var stack = [ary[0]];

  for (var i = 1; i < ary.length; i++) {
    if (stack[stack.length - 1] === ary[i]) {
      stack.pop();
    } else {
      stack.push(ary[i]);
    }
  }

  for (var j = 0; j < stack.length; j++) {
    answer += stack[j];
  }

  return answer;
}

module.exports = problem2;
