function problem2(cryptogram) {
  var answer;
  let stack = [cryptogram[0]];

  for (let i = 1; i < cryptogram.length; ++i) {
      let target = cryptogram[i];
      if (stack[stack.length - 1] === target) {
          stack.pop();
          continue;
      }
      stack.push(target);
  }

  answer = stack.join("")
  return answer;
}


module.exports = problem2;
