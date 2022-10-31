function problem3(number) {
  let answer = 0;

  const checkCount = (n) => {
    let count = 0;
    let stringN = n.toString();
    for (let i = 0; i < stringN.length; i++) {
      if (stringN[i] === "3" || stringN[i] === "6" || stringN[i] === "9") {
        count = count + 1;
        // console.log(n, i, count, stringN[i]);
      }
    }
    return count;
  };

  for (let i = 1; i < number + 1; i++) {
    const stringN = i.toString();

    if (
      stringN.includes("3") ||
      stringN.includes("6") ||
      stringN.includes("9")
    ) {
      answer = answer + checkCount(i);
    }
  }
  return answer;
}

module.exports = problem3;
