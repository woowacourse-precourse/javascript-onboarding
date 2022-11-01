function problem3(number) {
  let answer = 0;
  let arr = [];
  let str = ''
  const three = /3/g
  const six = /6/g
  const nine = /9/g
  for(let i=1; i<=number; i++){
    arr.push(i.toString())
    str = arr.join('')
  }
  
  return str.match(three).length + str.match(six).length + str.match(nine).length
}

module.exports = problem3;
