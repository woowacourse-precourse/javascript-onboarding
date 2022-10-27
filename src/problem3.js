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
  
}

module.exports = problem3;
