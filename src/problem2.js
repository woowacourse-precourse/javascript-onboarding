function problem2(cryptogram) {}

const removeDuplicated = (text) => {
  const textArray = text.toString().split("");
  const parsedArray = parseDuplicate(textArray);
  const resultData = parsedArray.join("");

  return resultData;
};

module.exports = problem2;

const parseDuplicate = (textArray) => {
  const resultArray = [...textArray];
  textArray.reduce((prev, cur, curIndex) => {
    if (prev === cur) {
      resultArray[curIndex] = "";
      resultArray[curIndex - 1] = "";
    }

    return cur;
  });

  return resultArray;
};

/*
  구현할 것.
  ### reduce 배운거 써먹어보기 
  Array.prototype.reduce()
  
  reduce 새로운 배열 생성해서
  중복된 데이터 전부 삭제.(홀수 경우 생각)
  
  동일한 경우 prev, cur값 빈 스트링하고 join하면 될 듯?
  
  1. reduce용 배열 생성.
  2. prev === cur인 경우 해당 배열에 빈 스트링 넣어주기.
  3. join return
  4. 중복 없을 때까지 돌려야함.
  */
