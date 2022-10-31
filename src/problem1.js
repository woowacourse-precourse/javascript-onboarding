function problem1(pobi, crong) {
  let pobiScore;
  let crongScore;
  
  function errCheck(li) {
    if (li[0] > li[1] || li[1] > li[0] + 1 || li[0] === li[1]){
      return true;
    }
    return false;
  }

  function toSplitPages(li) {
    let box = [];
    li.forEach(page => {
      let re = [];
      [...String(page)].forEach((val) => {
        re.push(parseInt(val))
      })
      box.push(re);
      re = []
    });
    return box;
  }

  function score(li) {
    let box = [];

    li.forEach((val) => {
      let result = val.reduce((sum, cur) => {
        return sum + cur;
      }, 0)
      box.push(result);

      result = 0;

      result = val.reduce((mul, cur) => {
        return mul * cur;
      }, 1);
      box.push(result);
    });
   return Math.max(...box);
  }
  if (errCheck(pobi) || errCheck(crong)){
    return -1;
  }
  

  pobi = toSplitPages(pobi);
  crong = toSplitPages(crong);
  
  pobiScore = score(pobi);
  crongScore = score(crong);

  if (pobiScore > crongScore ) {
    return 1;
  } else if (pobiScore < crongScore) {
    return 2;
  } else {
    return 0;
  }
}

module.exports = problem1;
