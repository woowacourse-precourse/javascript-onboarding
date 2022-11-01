function problem1(pobi, crong) {
  const [a, b] = pobi;
  const [c, d] = crong;

  if(pobi.length > 2 || crong.length > 2 || b-a !== 1 || d-c !==1){
    return -1
  }
  
  const addPbOdd = a
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((acc, cur) => acc + cur);
  const addPbEven = b
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((acc, cur) => acc + cur);

  const mulPbOdd = a
    .toString()
    .split("")
    .reduce((acc, cur) => acc * cur);
  const mulPbEven = b
    .toString()
    .split("")
    .reduce((acc, cur) => acc * cur);

  const addCrOdd = c
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((acc, cur) => acc + cur);
  const addCrEven = d
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((acc, cur) => acc + cur);

  const mulCrOdd = c
    .toString()
    .split("")
    .reduce((acc, cur) => acc * cur);
  const mulCrEven = d
    .toString()
    .split("")
    .reduce((acc, cur) => acc * cur);

  const pbScore = [addPbOdd, addPbEven, mulPbOdd, mulPbEven];
  const crScore = [addCrOdd, addCrEven, mulCrOdd, mulCrEven];

  const pbMaxScore = Math.max.apply(null, pbScore);
  const crMaxScore = Math.max.apply(null, crScore);

  if(pbMaxScore > crMaxScore ) {
    return 1;
  }
  if(pbMaxScore < crMaxScore){
    return 2;
  }
  if(pbMaxScore === crMaxScore){
    return 0;
  }

}

module.exports = problem1;
