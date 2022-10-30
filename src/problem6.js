function crewNameArray(array) {
  let crewNameArr = [];

  array.forEach((item) => {
    crewNameArr.push(item[1]);
  });
  return crewNameArr;
}

function cutTwoCharArray(array) {
  const crewNameArr = crewNameArray(array);
  let twoCharNameArr = [];

  crewNameArr.forEach((item) => {
    let i = 0;

    for (; i < item.length - 1; i++) {
      twoCharNameArr.push(item.slice(i, i + 2));
    }
  });
  return twoCharNameArr;
}
