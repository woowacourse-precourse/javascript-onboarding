function deleteDuplicates(arrays, fromIndex) {
  var toIndex = fromIndex ^ 1;
  var lastPush = null;

  while (true) {
    var lastPop = arrays[fromIndex].pop();

    if (lastPop === lastPush) {
      arrays[toIndex].pop();
      while (lastPop == lastPush) {
        lastPop = arrays[fromIndex].pop();
      }
    }
    if (!lastPop) {
      break;
    }
    arrays[toIndex].push(lastPop);
    lastPush = lastPop;
  }
}

function problem2(cryptogram) {
  var answer;
  var arrays = [cryptogram.split(''), []];
  var fromIndex = 0;

  do {
    var fromLength = arrays[fromIndex].length;
    var toIndex = fromIndex ^ 1;

    deleteDuplicates(arrays, fromIndex);
    fromIndex ^= 1;
  } while (fromLength != arrays[toIndex].length);
  if (toIndex & 1) {
    arrays[toIndex].reverse();
  }
  answer = arrays[toIndex].join('');
  return answer;
}

module.exports = problem2;
