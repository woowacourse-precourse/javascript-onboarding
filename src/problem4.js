function problem4(word) {
  console.log(word);
  let answer = [];
  let temp = [];
  let newTemp = [];
  let array = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let reversed = Array.from(array).reverse();

  // a-z for문 돌려서 index값 구하기
  for (let i = 0; i < word.length; i++) {
    if (`${word[i]}` === `${word[i]}`.toUpperCase()) {
      // console.log("대문자 or 빈칸");
      if (`${word[i]}` !== " ") {
        temp.push(array.indexOf(`${word[i]}`.toLowerCase()));
      } else {
        temp.push(-1);
      }
    } else {
      temp.push(array.indexOf(`${word[i]}`));
    }
  }

  //z-a index값 대입 후 값 return
  for (let ri = 0; ri <= temp.length; ri++) {
    // console.log();
    if (reversed[temp[ri]] === undefined) {
      newTemp.push(" ");
    } else {
      newTemp.push(reversed[temp[ri]]);
    }
  }

  // word로 받은 매개변수 대문자 소문자 파악 후 변경
  for (let uc = 0; uc < word.length; uc++) {
    if (word[uc] === word[uc].toUpperCase() && word[uc] !== " ") {
      console.log(uc);
      console.log(newTemp[uc]);
      // let upper = newTemp[uc].toUpperCase();
      // newTemp[uc].replace(newTemp[uc], upper);
      // // answer[uc].replace(`${answer[uc]}`, `${upper}`);
      // newTemp[uc].toUpperCase();
      newTemp[uc] = newTemp[uc].toUpperCase();
    }
  }
  //맨 뒤에 '' 생성이 되어서
  newTemp.pop();

  answer = newTemp.join("");
  // console.log(answer.length);
  // newTemp[0] = "a";
  return answer;
}

module.exports = problem4;

// problem4("I love you");
