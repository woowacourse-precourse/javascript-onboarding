const checkValid = (arr1, arr2) => {
    let flag = true;
    if(arr1[1] - arr1[0] !== 1 || arr2[1] - arr2[0] !== 1) {
        flag = false;
    } 
    return flag;
}

function problem1(pobi, crong) {
  let result;
  if(!checkValid(pobi, crong)) result = -1;
  return result;
}

module.exports = problem1;
