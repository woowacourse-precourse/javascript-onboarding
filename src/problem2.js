function problem2(cryptogram) {
  let answer;
  let express = /(\w)\1+/g;
  let overlap = cryptogram.match(express);
  let del = cryptogram;

  let work = () => {
    del = del.replace(overlap[0], "");
    overlap = del.match(express);
  }

  if (overlap === null) {
    return cryptogram;
  } else {
    work();
    while (overlap !== null) {
      work();
    }
  }
  answer = del;
  return answer;
}

module.exports = problem2;
