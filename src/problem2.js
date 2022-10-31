function problem2(cryptogram) {
  if (cryptogram.length < 1) {
    return cryptogram;
  } else if (cryptogram.length === 2) {
    if (cryptogram[0] !== cryptogram[1]) {
      return cryptogram;
    } else {
      return "";
    }
  }

  const seperate = cryptogram.split("");
  let ptr1 = 0;
  let ptr2 = 1;
  while (ptr2 < seperate.length) {
    if (seperate[ptr1] !== seperate[ptr2]) {
      ptr1++;
      ptr2++;
    } else if (seperate[ptr1] === seperate[ptr2]) {
      seperate.splice(ptr1, 2);
      ptr2 = ptr1;
      ptr1 = ptr1 - 1;
    }
  }

  if (seperate.length > 0) {
    const answer = seperate.join("");
    return answer;
  } else {
    return "";
  }
}

module.exports = problem2;
