function problem3(number) {
  let answer;

  for (let num = 1; num <= number; num++) {
    // 기능 1
    const numPlace = devidePlace(num);
    console.log(numPlace);

    // 기능 2
    let count = countClap(numPlace);
    console.log(count);
    
  }

  return answer;
}

// 기능 1. 주어진 숫자를 자릿수로 나누기
function devidePlace(number) {
  let numPlace = [];
  
  do {
    r = number % 10;
    numPlace.push(r);
    number = Math.floor(number / 10);
  } while (number > 0)

  return numPlace;
}

// 기능 2. 각 자릿수마다 3, 6, 9에 해당하는지 확인하기
function countClap(numPlace) {
  let count = 0;

  for (let num of numPlace) {
    if (num % 3 == 0 || num % 6 == 0 || num % 9 == 0) {
      count += 1
    }
  }

  return count;
}



// problem3(5);
// problem3(13);
problem3(100);

// module.exports = problem3;