function problem6(forms) {
  var answer = [];
  var noName = []
  var result = []
  var array = forms
  // var emailExp = new RegExp('^[a-zA-Z0-9+-.]+@+[email.com]+$')
  // var nameExp = new RegExp('^[ㄱ-ㅎ|가-힣]+$')

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let temp = array[j][1]
      for (let k = 0; k < temp.length + 1; k++) {
        if (array[i][1].includes(temp[k] + temp[k + 1]) || array[i][1].includes(temp[k + 1] + [temp[k + 2]])) {
          noName.push(array[i])
        }
      }
    }
    result = [...new Set(noName)]
  }
  for(let i = 0 ; i < result.length ; i++){
    result[i].pop()
  }
  answer = result.sort()
  
  answer = answer.reduce(function (acc, cur) {
    return acc.concat(cur);
  });
  return answer;
}

module.exports = problem6;
