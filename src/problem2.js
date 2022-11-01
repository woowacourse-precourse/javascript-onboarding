function problem2(cryptogram) {
  let result = "";
  cryptogram += " ";
  const originalLength = cryptogram.length
  let check = new Array(originalLength).fill(0);
  let start = 0;

  while (start < originalLength - 1) {

    let continueCount = 0;
    for (let end = start + 1; end < originalLength; end++) {
      
      if (check[end]) {
        continue
      }

      if (cryptogram[end] != cryptogram[start]) {
        
        if (continueCount === 0) {
          start = end
        } else {

          for (let i = start; i < end; i++) {
            check[i] = 1
          }
          
          let isFirst = true;
          for (let i = start; i >= 0; i--) {
            if (check[i] === 0) {
              start = i
              isFirst = false
              break
            }
          }

          if (isFirst) {
            start = end
          }

          continueCount = 0
        }

        break
      }
  
      continueCount += 1
    }
  }

  for (let idx = 0; idx < originalLength - 1; idx++) {
    if (check[idx] === 0) {
      result += cryptogram[idx]
    }
  }

  return result
}

module.exports = problem2;
