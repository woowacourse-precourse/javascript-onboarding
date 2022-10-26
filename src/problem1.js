function problem1(pobi, crong) {
  //짝수, 홀수 : even, odd
  var answer;
  var [a,b] = pobi;
  var [c,d] = crong;
  
  var pobiNum = 0;
  var crongNum = 0;
  function add(num) {
      return String(num).split("").reduce((n,i) => n + parseInt(i),0);
  }
  function multiply(num) {
    return String(num).split("").reduce((n,i) => n*i);
    }
    function compare(num1,num2){
        if(num1>num2) {
            return num1;
        }else {
            return num2;
        }
    }
    var pobiLeft = compare(add(a),multiply(a));
  var pobiRight = compare(add(b),multiply(b));
  var crongLeft = compare(add(c),multiply(c));
  var crongRight = compare(add(d),multiply(d));
  pobiNum = compare(pobiLeft,pobiRight);
  crongNum = compare(crongLeft,crongRight);
  // console.log(a,b,c,d);
  // console.log(pobiLeft,pobiRight,crongLeft,crongRight);
  // console.log(`'pobiNum: ${pobiNum}`);
  // console.log(`'crongNum: ${crongNum}`);
  return answer;
}
module.exports = problem1;
