function bigPageCompare(bookPage) {
  let res = 0;
  res = bigPageAdd(bookPage[0]);
  let res2 = bigPageMultiplication(bookPage[0]);
  if (res < res2) {
    res = res2;
  }
  res2 = bigPageAdd(bookPage[1]);
  if (res < res2) {
    res = res2;
  }
  res2 = bigPageMultiplication(bookPage[1]);
  if (res < res2) {
    res = res2;
  }
  return res;
}

function bigPageAdd(bookPage) {
  let leftBookPageIdx = bookPage.toString();
  let res = 0;
  for (i = 0; i < leftBookPageIdx.length; i++) {
    res = res + parseInt(leftBookPageIdx[i]);
  }
  return res;
}

function bigPageMultiplication(bookPage) {
  let leftBookPageIdx = bookPage.toString();
  let res = 1;
  for (i = 0; i < leftBookPageIdx.length; i++) {
    res = res * parseInt(leftBookPageIdx[i]);
  }
  return res;
}

function openBook(bookPage) {
  // console.log(typeof bookPage);
  if (bookPage.length !== 2) {
    return -1;
  }
  if (bookPage[1] - bookPage[0] != 1) {
    return -1;
  }
  if (1 > bookPage[0] || bookPage[0] > 400) {
    return -1;
  } else if (1 > bookPage[1] || bookPage[1] > 400) {
    return -1;
  }
  if (bookPage[0] % 2 == 0) {
    return -1;
  } else if (bookPage[1] % 2 == 1) {
    return -1;
  }
  return 1;
}

function problem1(pobi, crong) {
  let pobiRes = openBook(pobi);
  let crongRes = openBook(crong);
  let res = 0;
  if (pobiRes == -1 || crongRes == -1) {
    return -1;
  }
  pobRes = 0;
  crongRes = 0;
  pobiRes = bigPageCompare(pobi);
  crongRes = bigPageCompare(crong);
  if (pobiRes > crongRes) {
    return 1;
  } else if (pobiRes < crongRes) {
    return 2;
  } else if (pobiRes == crongRes) {
    return 0;
  }
}

module.exports = problem1;
console.log(problem1([97, 98, 99], [197, 198]));
// problem1([97, 98, 99], [197, 198]);
