function problem21(cryptogram) {

  while(1) {
    let count = 0;
    let nextState = []
    let isDoubled = false

    cryptogram.split('').forEach((c,idx) => {
      console.log('c', c,'prev', nextState[nextState.length-1])
      if (nextState[nextState.length-1] == c) {
        count += 1;
        isDoubled = true
      }
      nextState.push(c)
      
      console.log('count', count)
      if (count >= 1) {
        while(count >= 0) {
          nextState.pop();
          count -= 1;
        }
      }
      if (count == -1) {
        isDoubled = false
        count = 0}
      console.log(nextState)
    });
    cryptogram = nextState
    
    if (!isDoubled) return cryptogram.join('')
  }
}

function problem2(cryptogram) {
  
  // let cryptoList = cryptogram.split('');
  // let prevCrypto = ''
  // let prevIndex = -1
  // let lastIndex = -1
  // let isDoubled = false
  // let nextState = []
  // while(1) {
  //   cryptoList.forEach((crypto, idx) => {
  //     if (crypto === prevCrypto) {
  //       prevIndex = idx - 1;
  //       lastIndex = prevIndex + 1
  //       isDoubled = true
  //       while(1) {
  //         if (cryptoList[prevIndex] == cryptoList[lastIndex]) {
  //           lastIndex += 1
  //         } else {
  //           nextState = [...cryptoList.slice(0, prevIndex), ...cryptoList.slice(lastIndex+1)]
  //           break;
  //         }
  //       }
        
  //     }
  //     prevCrypto = crypto;
  //     cryptoList = nextState
  //   })
  // }
  return 0
  

}

module.exports = problem2;
