function problem1(pobi, crong) {
  let answer;
  if(checkValid(pobi,crong)){
    let pobiMax = getMaxValue(pobi);
    let crongMax = getMaxValue(crong);
    answer = 1;
  } else{
    answer = -1;
  }

  function checkValid(arr1, arr2){
    //예외 check
    let checkRange = (page) => page<1 || page>400;

    if(arr1.some(checkRange) || arr2.some(checkRange)) return 0;
    if(arr1[0] % 2 !== 1 || arr2[0] % 2 !== 1) return 0;
    if(arr1[1]-arr1[0] !== 1 || arr2[1]-arr2[0] !== 1) return 0;
    if(arr1[0] == 1 || arr1[0] == 399 || arr2[0] == 1 || arr1[1] == 399) return 0;
    
    return 1;
  }

  function getMaxValue(arr){
    let leftDigitArray = arr[0].toString().split("").map(str => Number(str));
    let rightDigitArray = arr[1].toString().split("").map(str => Number(str));
    let leftArrPlus = 0;
    let rightArrPlus = 0;
    let leftArrMultiple = 1;
    let rightArrMultiple = 1;
    leftDigitArray.forEach(element => {
      leftArrPlus+=element;
      leftArrMultiple*=element;
    });
    rightDigitArray.forEach(element => {
      rightArrPlus+=element;
      rightArrMultiple*=element;
    });
    return compareInt(compareInt(leftArrPlus,leftArrMultiple),compareInt(rightArrPlus,rightArrMultiple))
  }

  function compareInt(a,b){
    if(a>b) return a;
    else return b;
  }

  return answer;
}

module.exports = problem1;
