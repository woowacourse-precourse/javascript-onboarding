function problem2(cryptogram) {
  const array = cryptogram.split("");
  let rep = [];
  for (let i = 0; i < array.length; i++) {
    if (rep.length === 0) {
      rep.push(array[0]);
    }
    if (array[i] == rep[rep.length - 1]) {
      while (array[i] === array[i + 1]) {
        i++;
      }
      rep.pop();
      continue;
    }
    rep.push(array[i]);
  }
  var answer = rep.toString().replace(/,/g, "");
  return answer;
}

console.log(problem2("browoanoommnaon"));
module.exports = problem2;
