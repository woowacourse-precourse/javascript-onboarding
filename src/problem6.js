function crewNameArray(array) {
  let crewNameArr = [];

  array.forEach((item) => {
    crewNameArr.push(item[1]);
  });
  return crewNameArr;
}
