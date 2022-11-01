function problem2(cryptogram) {
  var answer = decode(cryptogram);
  return answer;
}

function decode(cryptogram) {
  const spellings = [...cryptogram.toString()];
  let result = spellings.reduce((acc, cur) => {
    acc.at(-1) === cur ? acc.pop() : acc.push(cur);
    return acc;
  }, []);
  return result.join("");
}

module.exports = problem2;
