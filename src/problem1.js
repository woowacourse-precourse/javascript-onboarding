function problem1(pobi, crong) {
  var answer;
  var top_pobi = number_picker(pobi);
  var top_crong = number_picker(crong);

  if (pobi[0] + 1 != pobi[1] || crong[0] + 1 != crong[1]) {
    return -1;
  }

  if (top_pobi > top_crong) {
    answer = 1;
  } else if (top_pobi < top_crong) {
    answer = 2;
  } else if (top_pobi == top_crong) {
    answer = 0;
  }
  return answer;
}

function number_picker(arr) {
  var plus = 0;
  var multiply = 1;
  var max_number = 0;

  for (var i in arr) {
    var page = String(arr[i]);
    for (var j in page) {
      plus += parseInt(page[j]);
      multiply *= parseInt(page[j]);
    }
    max_number = Math.max(plus, multiply);
    console.log(page, plus, multiply, max_number);
  }
  return max_number;
}

module.exports = problem1;
