//같은 문자들을 지워주는 함수
const eraseArray = (cryptogram, index) => {
  let count = 1; //자르는 갯수
  let j = index;

  //같지 않을때 까지 인덱스를 증가시킨다.
  while (cryptogram[j] === cryptogram[j+1]) {
      count++;
      j++;
  }

  //같은 갯수만큼 잘라준다.
  cryptogram.splice(index, count);
}

}

module.exports = problem2;
