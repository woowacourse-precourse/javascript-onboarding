function problem2(cryptogram) {
  const container = [];
  let hasDuplicates = false;
  for (let i = 0; i < cryptogram.length; i++) {
    let count = 1;
    while (cryptogram[i] === cryptogram[i + 1]) {
      hasDuplicates = true;
      i += 1;
      count += 1;
    }
    container.push([cryptogram[i], count]);
  }

  const result = container.map((el) => {
    if (el[1] === 1) return el[0];
  });

  if (hasDuplicates) return problem2(result.join(''));

  return result.join('');
}

module.exports = problem2;
