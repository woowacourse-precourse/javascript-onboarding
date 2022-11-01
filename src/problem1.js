function problem1(pobi, crong) {
  let pobiRight = [];
  let pobiLeft = [];
  let crongRight = [];
  let crongLeft = [];

  pobiLeft = makePage(pobi[0], pobiLeft);
  pobiRight = makePage(pobi[1], pobiRight);
  crongLeft = makePage(crong[0], crongLeft);
  crongRight = makePage(crong[1], crongRight);

  let pobiresult = [];
  let crongresult = [];

  pobiresult.push(sum(pobiLeft));
  pobiresult.push(sum(pobiRight));
  crongresult.push(sum(crongLeft));
  crongresult.push(sum(crongRight));
  pobiresult.push(multi(pobiLeft));
  pobiresult.push(multi(pobiRight));
  crongresult.push(multi(crongLeft));
  crongresult.push(multi(crongRight));

  pobimax = Math.max(...pobiresult);
  crongmax = Math.max(...crongresult);

  result = solving(pobimax, crongmax, pobi, crong); // 결과값 도출 및 예외처리
  return result;
}
function solving(pomax, crmax, pobiArray, crongArray) {
  //결과값 or 예외처리
  if (pobiArray[0] + 1 !== pobiArray[1]) return -1;
  if (crongArray[0] + 1 !== crongArray[1]) return -1;
  if (
    pobiArray[0] === 1 ||
    pobiArray[1] === 400 ||
    crongArray[0] === 1 ||
    crongArray[1] === 400
  )
    return -1;
  if (pomax > crmax) return 1;
  if (pomax < crmax) return 2;
  if (pomax === crmax) return 0;
}

function multi(multiArray) {
  //포비, 크롱의 각페이지별 곱 결과추출
  const result = multiArray.reduce(function add(multi, cur) {
    return multi * cur;
  }, 1);
  return result;
}

function sum(sumArray) {
  // 포비,크롱의 각 페이지별 합 결과추출
  const result = sumArray.reduce(function add(sum, cur) {
    return sum + cur;
  }, 0);
  return result;
}

function makePage(pageNumber, pageArray) {
  //포비,크롱의 페이지를 각 숫자별로 배열로 만듬
  const page = [100, 10, 1];
  let i = 0;
  if ((pageNumber + "").length === 1) {
    while (pageNumber > 0) {
      pageArray.push(parseInt(pageNumber / page[i + 2]));
      pageNumber = pageNumber % page[i + 2];
      i += 1;
    }
  } else if ((pageNumber + "").length === 2) {
    while (pageNumber > 0) {
      pageArray.push(parseInt(pageNumber / page[i + 1]));
      pageNumber = pageNumber % page[i + 1];
      i += 1;
    }
  } else {
    while (pageNumber > 0) {
      pageArray.push(parseInt(pageNumber / page[i]));
      pageNumber = pageNumber % page[i];
      i += 1;
    }
  }
  return pageArray;
}
a = [99, 98];
b = [197, 198];
problem1(a, b);
module.exports = problem1;
