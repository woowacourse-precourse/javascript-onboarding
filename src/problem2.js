function problem2(cryptogram) {
  let encoded = cryptogram;
  while (true) {
    const newEncoded = encoding(encoded);
    if (newEncoded === encoded) {
      break;
    }
    encoded = newEncoded;
  }
  return encoded;
}

function encoding(encoded) {
  let newEncoded = encoded;
  for (let i = 1; i < encoded.length; i++) {
    if (encoded[i-1] === encoded[i]) {
      newEncoded = encoded.slice(0, i-1) + encoded.slice(i+1);
      break;
    }
  }
  return newEncoded
}

module.exports = problem2;
