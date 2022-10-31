function problem2(cryptogram) {
  while (1) {
    let removeList = [];
    cryptogram.split("").forEach((x, idx) => {
      if (x === cryptogram[idx + 1]) {
        removeList.push(idx,idx+1);
      }
    });
    removeList = [...new Set(removeList)];

    for(let i=0;i<removeList.length;i++){
      cryptogram = cryptogram.slice(0, removeList[0]) + cryptogram.slice(removeList[0]+1);
    }
    if (removeList.length === 0) break;
  }
  return cryptogram;
}

module.exports = problem2;
