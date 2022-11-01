function problem3(number) {
  let cnt = 0;
  const rgx = /3|6|9/g;
  for(let i = 1; i <=number;i ++){
    cnt +=(String(i).match(rgx) || "").length;
  }
  return cnt;
}

module.exports = problem3;
