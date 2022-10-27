function problem2(cryptogram) {

  var answer = "";

  return [...new Set(cryptogram)].join('')

}

console.log(problem2("browoanoommnaon"))

/*
module.exports = problem2;
*/