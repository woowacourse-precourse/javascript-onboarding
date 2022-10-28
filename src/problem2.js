function problem2(cryptogram) { 
  const removed = deduplication(cryptogram); 

  if (cryptogram == removed) return removed;
}

module.exports = problem2;

const deduplication = (str) => {
  let res = ''; 

  for (let i = 0; i < str.length; i++) {
    const pre = str[i-1];
    const now = str[i];
    const next = str[i+1];

    if (now !== pre && now !== next) {
      res += now;
    }
  }

  return res;
}