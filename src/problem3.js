function problem3(number) {
  var answer = 0;
  let arrange = Array.from({length: number}, (value, index) => String(index + 1))
  for (let i = 0; i < arrange.length; i++) {
    let splitNumArr = arrange[i].split('')
    answer += count369(splitNumArr)
  }
  
  return answer;
}

function count369(arr) {
  let count = 0;
  arr.forEach(element => {
    if (element === '3' || element === '6' || element === '9') {
      count++
    }
  })
  return count;
}

module.exports = problem3;
