function problem4(word) {
  let original= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '
  let change = 'zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA '

  return word.split('')
             .map(v => change[original.indexOf(v)])
             .join('');
}

module.exports = problem4;
