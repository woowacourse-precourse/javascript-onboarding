function problem6(forms) {
  var answer;


  console.log("this is problem 6")

  function check(name, target) {
    let rlt = []
    for ( let a = 0 ; a < name[1].length; a++){
      for (let b = 0; b < target[1].length; b++){
        if ( name[1][a] === target[1][b] ){
          if ( name[1][a+1] === target[1][b+1] && name[1][a+1] !== undefined && target[1][b+1] !== undefined ){
            rlt.push(name[0])
            rlt.push(target[0])
            break
          }
        }
      }
    }
    return rlt
  }
  let result = []
  for ( let i = 0 ; i < forms.length; i ++) {
    for ( let j = i+1 ; j < forms.length; j ++) {
      rlt = check(forms[i],forms[j])
      for ( let k = 0 ; k < rlt.length ; k ++) {
        if ( result.includes(rlt[k]) === false ) {
          result.push(rlt[k])
        }
      }
    }
  }
  answer = result.sort()
  return answer;
}

module.exports = problem6;
