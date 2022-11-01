function problem3(number) {
  var count = 0;

  const Numbers = Array.from({ length: number }, (v, i) => i + 1);
  Numbers.forEach((eachNum) => {
    eachNum
      .toString()
      .split("")
      .forEach((char) => {
        switch (char) {
          case "3":
          case "6":
          case "9":
            count++;
            break;
        }
      });
  });

  return count;
}

module.exports = problem3;
