function problem5(money) {
  var answer;
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let num = money;

  while (num > 0) {
    if (num / 50000 >= 1) {
      arr[0] = Math.floor(num / 50000);
      num -= arr[0] * 50000;
    } if (num / 10000 >= 1) {
      arr[1] = Math.floor(num / 10000);
      num -= arr[1] * 10000;
    } if (num / 5000 >= 1) {
      arr[2] = Math.floor(num / 5000);
      num -= arr[2] * 5000;
    } if (num / 1000 >= 1) {
      arr[3] = Math.floor(num / 1000);
      num -= arr[3] * 1000;
    } if (num / 500 >= 1) {
      arr[4] = Math.floor(num / 500);
      num -= arr[4] * 500;
    } if (num / 100 >= 1) {
      arr[5] = Math.floor(num / 100);
      num -= arr[5] * 100;
    } if (num / 50 >= 1) {
      arr[6] = Math.floor(num / 50);
      num -= arr[6] * 50;
    } if (num / 10 >= 1) {
      arr[7] = Math.floor(num / 10);
      num -= arr[7] * 10;
    } if (num / 1 >= 1) {
      arr[8] = Math.floor(num / 1);
      num -= arr[8] * 1;
    }
  }
  console.log(arr);
  answer = arr;
  return answer;
}

module.exports = problem5;
