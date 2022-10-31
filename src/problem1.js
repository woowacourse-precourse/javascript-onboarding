function problem1(pobi, crong) {
  let answer;
  let pobiPageMax = maxPage(pobi);
  let crongPageMax = maxPage(crong);
  
  if (pobiPageMax === -1 || crongPageMax === -1) {
    answer = -1;
  } else if (pobiPageMax > crongPageMax) {
    answer = 1;
  } else if (pobiPageMax < crongPageMax) {
    answer = 2;
  } else {
    answer = 0;
  }
  return answer;
}
function maxPage(pages){
  let maxPageNum = 0;
  if (pages[0] !== pages[1] - 1 || pages[0] - pages[1] === 399) {
    return -1;
  }
  for(let page of pages){
    let sum = 0;
    let mul = 1;
    while (page > 0){
      sum += page % 10;
      mul *= page % 10;
      page = Math.floor(page / 10);
    } 
    maxPageNum = Math.max(maxPageNum, sum > mul ? sum : mul);

    return maxPageNum;
  }
}
module.exports = problem1;
