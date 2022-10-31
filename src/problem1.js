function problem1(pobi, crong) {
  let answer;
  if(checkValid(pobi,crong)){
    answer = 1;
  } else{
    answer = -1;
  }

  function checkValid(arr1, arr2){
    //예외 check
    let checkRange = (page) => page<1 || page>400;

    if(arr1.some(checkRange) || arr2.some(checkRange)) return 0;
    if(arr1[0] % 2 !== 0 || arr2[0] % 2 !== 0) return 0;
    if(arr1[1]-arr1[0] !== 1 && arr2[1]-arr2[0] !== 1) return 0;
    if(arr1[0] == 1 || arr1[0] == 399 || arr2[0] == 1 || arr1[1] == 399) return 0;
    
    return 1;
  }
  return answer;
}

module.exports = problem1;
