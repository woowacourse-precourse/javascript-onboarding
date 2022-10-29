function findDuplicated(splited) {
  const duplicated = [];

  let pre = splited[0];

  for (let i = 1; i < splited.length; i++) {
    if (splited[i] === pre) {
      if (!duplicated[i - 1]) {
        duplicated[i] = 1;
        duplicated[i - 1] = 1;
      } else {
        duplicated[i] = 1;
      }
    }

    pre = splited[i];
  }

  return duplicated;
}

function problem2(cryptogram) {
  if (cryptogram.length > 1000 || cryptogram.length < 1) return;
  if (cryptogram.match(/([^A-Za-z])+/g)) return;

  let string = cryptogram.toLowerCase();
  let splited = string.split("");

  while (true) {
    const duplicated = findDuplicated(splited);

    if (!duplicated.length) break;
    for (let i = 0; i < duplicated.length; i++) {
      if (duplicated[i]) {
        splited.splice(i, 1, null);
      }
    }
    string = splited.join("");
    splited = string.split("");
  }

  return string;
}

module.exports = problem2;
