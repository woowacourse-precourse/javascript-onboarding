const removeDuplicates = (string) => {
  const result = string.split('').reduce((acc, cur) => {
    if (acc.slice(-1) === cur) {
      return acc.slice(0, -1);
    }
    
    return acc + cur;
  }, '');
  
  return result;
};

function problem2(cryptogram) {
  return removeDuplicates(cryptogram);
}

module.exports = problem2;
