function problem1(pobi, crong) {
  if ( !isValid(pobi) || !isValid(crong) ) {
    return -1;
  }

}
function isValid(arr) {
  let left = arr[0];
  let right = arr[1];

  if ( left % 2 == 0) {
    return false;
  }

  return right - left == 1;
}

module.exports = problem1;
