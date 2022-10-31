function problem2(cryptogram) {
  var answer;

  for( var i = 0; i<n; i++) {
    var j;

    for( j = 0; j < i; j++) {
      break;
    }

    if( j == 1 ) {
      cryptogram[answer++] = cryptogram[i];
    }
  }
  return cryptogram.join("").slice(cryptogram, answer);
}


module.exports = problem2;
