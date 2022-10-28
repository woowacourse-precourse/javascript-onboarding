function problem3(number) {
  function add(a, b) {
    return a + b;
  }

  function has(...args) {
    return (item) => {
      while (item > 0) {
        if (args.includes(item % 10)) return true;
        item = Math.floor(item / 10);
      }
    }
  }

  function count(...args) {
    return (item) => {
      let acc = 0;
      while (item > 0) {
        if (args.includes(item % 10)) acc++;
        item = Math.floor(item / 10);
      }
      return acc;
    }
  }
}

let Lazy = {};

Lazy.range = function* (start, end) {
  let number = start;
  while (number <= end) {
    yield number;
    number++;
  }
}

Lazy.filter = function* (f, iter) {
  for (const item of iter) {
    if (f(item)) yield item;
  }
}

Lazy.map = function* (f, iter) {
  for (const item of iter) {
    yield f(item);
  }
}

function reduce(f, acc, iter) {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const item of iter) {
    acc = f(acc, item);
  }
  return acc;
}



module.exports = problem3;
