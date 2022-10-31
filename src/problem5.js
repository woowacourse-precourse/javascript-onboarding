function problem5(money) {
  const changes = [50000,10000,5000,1000,500,100,50,10,1];
  let change = [];
  let count = 0;
  for(let i=0;i<9;i++){
    if(money / changes[i] >= 1){
      count = Math.floor(money/changes[i]);
      change.push(count);
      money = money - changes[i] * count;
    } else {
      change.push(0);
    }
  }
  console.log(change);
  return change;
}

module.exports = problem5;