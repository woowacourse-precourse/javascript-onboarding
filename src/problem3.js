function problem3(number) {
  const tokens = [3,6,9]
  let count = 1;
  let claps = 0

  while(count <= number) {
    let slicedNumber = count.toString().split('').map(slice => parseInt(slice));
    
    slicedNumber.forEach((number) => {
      if(tokens.includes(number)) claps++
    })
    
    count +=1
  }
  return claps;
}

module.exports = problem3;
