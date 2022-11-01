function problem1(pobi, crong) {
  let pobiLeftArr = (pobi[0]+'').split('');
  let pobiRightArr = (pobi[1]+'').split('');
  let crongLeftArr = (crong[0]+'').split('');
  let crongRightArr = (crong[1]+'').split('');

  function sum(arr){
    return arr.reduce((a, b) => Number(a) + Number(b), 0); 
  }
  function multiple(arr){
    return arr.reduce((a, b) => Number(a) * Number(b), 1);  
  }
}

module.exports = problem1;
