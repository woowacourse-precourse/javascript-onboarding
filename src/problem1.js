function problem1(pobi, crong) {
    let sum = 0;
    let mul = 1;
    while (num > 0) {
        let n = num % 10;
        sum += n;
        mul *= n;
        num = Math.floor(num / 10);
    }
    return [sum, mul];
}
function validation(arr) {
    if (arr[1] - arr[0] != 1) {
        return false;
    }

    var answer;
  return answer;
}

module.exports = problem1;
