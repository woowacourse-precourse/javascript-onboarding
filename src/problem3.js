let clap = 0;

function countClap(num) {
  const character = num % 10;
  if(character !== 0 && character % 3 === 0) {
    clap++;
  }

  return num / 10 < 1 ? clap : countClap(Math.floor(num / 10));
}

function problem3(number) {
  let totalClap = 0;
  
  for(let i = 1; i <= number; i++) {
    clap = 0;
    countClap(i);
    totalClap += clap;
  }

  return totalClap;
}

module.exports = problem3;


