function getMaxNumber(pages) {
  let numbers = [];
  pages.map((page) => {
    let arr = page
      .toString()
      .split("")
      .map((el) => +el);
    let sum = 0;
    let multiply = 1;
    arr.map((el) => {
      sum += el;
      multiply *= el;
    });
    numbers.push(sum, multiply);
  });
  return Math.max(...numbers);
}

console.log(getMaxNumber([99, 100]));
