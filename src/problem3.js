

function problem3(number) {
  let countClap = 0;
  for(let i = 1; i <= number; i++ ) {
    let arr = Array.from(String(i));
    arr.forEach(item => {
      if(item === '3' || item === '6' || item === '9') countClap++
    })
  }
  return countClap;
}




module.exports = problem3;



