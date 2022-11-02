function problem2(cryptogram) {
  var str = cryptogram;


  function removeDuplicates(splitStr) {
    var arr1 = Array.from(splitStr)

    for (i = 0; i < arr1.length + 1; i++) {
      var arr2 = arr1.filter(e => e !== e)
    };
    return arr2;

  }
  e.match(/[A-z]{2}/);

  var answer = removeDuplicates(str);
  return answer;
}

module.exports = problem2;