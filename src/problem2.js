function problem2(cryptogram) {
  const stack = [];

  for (let i = 0; i < cryptogram.length; i++) {
    let currentValue = cryptogram[i];
    if (currentValue === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(currentValue);
    }
  }

  return stack.join("");
}

module.exports = problem2;

// expected:	"brown"
console.log(problem2("browoanoommnaon"));
// expected: ""
console.log(problem2("zyelleyz"));
