function problem1(pobi, crong) {
  let answer, pobiNm, crongNm;

  const verifyLength = (page) => {
    let sum, multiply;
    if (page / 100 >= 1) {
      sum =
        Math.floor(page / 100) + Math.floor((page % 100) / 10) + (page % 10);
      multiply =
        Math.floor(page / 100) * Math.floor((page % 100) / 10) * (page % 10);
      return Math.max(sum, multiply);
    } else if (page / 100 < 1 && page / 10 >= 1) {
      sum = Math.floor(page / 10) + (page % 10);
      multiply = Math.floor(page / 10) * (page % 10);
      return Math.max(sum, multiply);
    } else return page;
  };

  const biggestNm = (lPage, rPage) => {
    if (Math.abs(lPage - rPage) > 1 || lPage === 1 || rPage === 400)
      return (answer = -1);

    return Math.max(verifyLength(lPage), verifyLength(rPage));
  };

  pobiNm = biggestNm(pobi[0], pobi[1]);
  crongNm = biggestNm(crong[0], crong[1]);

  if (answer === -1) return answer;
  else if (pobiNm > crongNm) return 1;
  else if (pobiNm < crongNm) return 2;
  else if (pobiNm === crongNm) return 0;

  return answer;
}

module.exports = problem1;
