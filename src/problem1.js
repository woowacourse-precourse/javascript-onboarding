const multiplyElements = (elements) => {
  let results = 1;

  elements.forEach((element) => {
    results *= Number(element);
  });

  return results;
};

const addElements = (elements) => {
  let results = 0;

  elements.forEach((element) => {
    results += Number(element);
  });

  return results;
};

const makeAddMultipleArray = (page) => {
  const results = [];

  const pageElements = page.toString().split('');

  results.push(multiplyElements(pageElements));
  results.push(addElements(pageElements));

  return results;
};

const MaxOfSumMultiple = (pages) => {
  let answerArray = [];

  //예외사항3.
  if (pages[1] - pages[0] !== 1) return -1;
  //예외사항4.
  if (pages[1] % 2 !== 0) return -1;
  if (pages[0] % 2 !== 1) return -1;
  //예외사항5.
  if (pages[0] >= pages[1]) return -1;

  for (const page of pages) {
    //예외사항2.
    if (page === (1 || 400)) return -1;

    answerArray = [...answerArray, ...makeAddMultipleArray(page)];
  }

  return Math.max(...answerArray);
};

function problem1(pobi, crong) {
  //예외사항1.
  if (pobi.length !== 2 || crong.length !== 2) return -1;

  const [pobiScore, crongScore] = [
    MaxOfSumMultiple(pobi),
    MaxOfSumMultiple(crong),
  ];

  //예외에 속하는지 유무 판단
  if (pobiScore === -1 || crongScore === -1) return -1;

  return pobiScore > crongScore ? 1 : pobiScore === crongScore ? 0 : 2;
}

module.exports = problem1;
