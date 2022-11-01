function problem5(money) {
  const fiftythousand = Math.floor(money / 50000);
  let money2 = money - fiftythousand * 50000;
  const tenthousand = Math.floor(money2 / 10000);
  let money3 = money2 - tenthousand * 10000;
  const fivethousand = Math.floor(money3 / 5000);
  let money4 = money3 - fivethousand * 5000;
  const onethousand = Math.floor(money4 / 1000);
  let money5 = money4 - onethousand * 1000;
  const fivehundred = Math.floor(money5 / 500);
  let money6 = money5 - fivehundred * 500;
  const onehundred = Math.floor(money6 / 100);
  let money7 = money6 - onehundred * 100;
  const fifty = Math.floor(money7 / 50);
  let money8 = money7 - fifty * 50;
  const ten = Math.floor(money8 / 10);
  let money9 = money8 - ten * 10;
  const one = Math.floor(money9 / 1);

  let arr = [];
  arr.push(fiftythousand);
  arr.push(tenthousand);
  arr.push(fivethousand);
  arr.push(onethousand);
  arr.push(fivehundred);
  arr.push(onehundred);
  arr.push(fifty);
  arr.push(ten);
  arr.push(one);

  let answer = arr;
  return answer;
}

module.exports = problem5;
