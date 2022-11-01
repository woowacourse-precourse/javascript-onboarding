function problem2(cryptogram) {
  let stringArr = [...cryptogram];
  let k = 0;
  const stringArrLength = stringArr.length;
  
  while (k <= stringArrLength/2 ){        
      
    for (let i = 0; i < stringArr.length ; i++) {           
      if (stringArr[i] == stringArr[i+1]){
        stringArr.splice(i,2);                
      }
    }
    k++;
  }
  let result = stringArr.join('')
  return result;
  }

module.exports = problem2;
