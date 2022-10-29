function problem3(number) {
  // 1부터 number까지의 숫자를 모두 순회하여 순회하는 숫자의 3,6,9 개수를 세어 리턴함.
  let count = 0;

  let i = 1;
  while (i <= number) {
    String(i)
      .split("")
      .forEach((num) => {
        if (num === "3" || num === "6" || num === "9") count++;
      });

    i++;
  }

  return count;
}

module.exports = problem3;
