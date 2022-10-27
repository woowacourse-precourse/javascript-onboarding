function clap(num) {
  let clap = 0;
  let str = String(num);

  for(let i = 0; i < str.length; i ++) {
    
    if(str[i] === "3" || str[i] === "6" || str[i] === "9") {
      clap ++;
    }
  }

  return clap;
}

function problem3(number) {
  let newArr = [...Array(number)].map((v, i) => i + 1);
  let answer = newArr.map((num) => clap(num));

  return answer
}

module.exports = problem3;
