function problem4(word) {
  let answer;

  const arr = word.split("");
  const dict = {};

  let i = 97;
  let j = 122;

  while (i < 123) {
    dict[String.fromCharCode(i)] = String.fromCharCode(j);
    i++;
    j--;
  }

  for (let i = 0; i < arr.length; i++) {
    const lowerCase = arr[i].toLowerCase();
    if (lowerCase in dict) {
      const isUpperCase = arr[i] === arr[i].toUpperCase();
      arr[i] = isUpperCase ? dict[lowerCase].toUpperCase() : dict[arr[i]];
    }
  }

  answer = arr.join("");

  return answer;
}

module.exports = problem4;
