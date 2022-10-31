const makeArr = (number) => String(number).split("");

const filterArrayBy = (arr, ...by) => arr.filter((v) => by.includes(+v));
