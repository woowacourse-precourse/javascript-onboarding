function problem1(pobi, crong) {
  var answer;

  if(pobi[1]-pobi[0]!= 1 ||crong[1]-crong[0] !=1 )return -1 
  if(pobi.length!=2 && crong.length!=2) return -1

  let pobi_pages, crong_pages
  for(let i = 0 ; i <String(pobi[1]).length ; i++){
    pobi_pages = [[...String(pobi[0])], [...String(pobi[1])]]
  }
  for(let i = 0 ; i <String(crong[1]).length ; i++){
    crong_pages = [[...String(crong[0])], [...String(crong[1])]]
  }

  let pobi_max = -2e9, crong_max = -2e9
  
  pobi_pages.forEach((page)=> {
    let sum = page.reduce(function add(sum, currValue) {
      return sum + Number(currValue);
    }, 0);
    let multiple = page.reduce(function multiply(sum, currValue) {
      return sum * Number(currValue);
    }, 1);
    if(Math.max(sum, multiple)> pobi_max) pobi_max = Math.max(sum, multiple)
  })

  crong_pages.forEach((page)=> {
    let sum = page.reduce(function add(sum, currValue) {
      return sum + Number(currValue);
    }, 0);
    let multiple = page.reduce(function multiply(sum, currValue) {
      return sum * Number(currValue);
    }, 1);
    if(Math.max(sum, multiple)> crong_max) crong_max = Math.max(sum, multiple)
  })

  if(pobi_max > crong_max) answer = 1
  else if(pobi_max < crong_max) answer = 2
  else if (pobi_max == crong_max) answer = 0

  return answer;
}

module.exports = problem1;
