function problem2(cryptogram) {
  const result = cryptogram.split('').reduce((acc, cur) => {
    if (acc.slice(-1) === cur) {
      return acc.slice(0, -1);
    }
    
    return acc + cur;
  }, '');
  
  return result;
}

module.exports = problem2;
