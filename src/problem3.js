function problem3(number) {  
  let count = 0;

  for(let i=1; i<=number; i++) {
    let arr = (i+"").split("");
    for (j=0; j<arr.length; j++) {
      if((Number(arr[j])=== 3) || (Number(arr[j])=== 6) || (Number(arr[j])=== 9)){
        count++;
      }
    }
  }
  return count;
}

module.exports = problem3;
