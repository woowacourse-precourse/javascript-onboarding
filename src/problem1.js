function problem1(pobi, crong) {
  let num;

  function pagesum(num) {
    let a, b, c;
    if (num > 100) {
        a = num / 100;
        b = (num % 100) / 10;
        c = num % 10;
        return a + b + c;
    }
    else {
        b = (num % 100) / 10;
        c = num % 10;
        return b + c;
    }
}

function pagemult(num) {
  let a, b, c;
  if (num > 100) {
      a = parseInt(num / 100);
      b = parseInt((num % 100) / 10);
      c = num % 10;
      return a * b * c;
  }
  else {
      b = parseInt((num % 100) / 10);
      c = num % 10;
      return b * c;
  }
}

for(let i=0; i<2; i++){
  if (pobi[i] == 1 || crong[i] == 1 || pobi[i] == 400 || crong[i] == 400) {
    return -1;
  }
  
  }

if(pobi[1] - pobi[0] != 1 || crong[1] - crong[0] != 1){
   return -1;
  }


let pobimax = Math.max(pagemult(pobi[0]) , pagemult(pobi[1]), pagesum(pobi[0]) , pagesum(pobi[1]));
let crongmax = Math.max(pagemult(crong[0]) , pagemult(crong[1]), pagesum(crong[0]) , pagesum(crong[1]));



if (pobimax == crongmax) {
  return 0;
}
else if (pobimax > crongmax) {
  return 1;
}
else if(pobimax < crongmax){
  return 2;
}
}

module.exports = problem1;
