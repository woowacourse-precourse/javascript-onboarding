function problem3(number) {

  const clapNum = [3, 6, 9];
  let clap = 0;
  
  //3, 6, 9번에 맞춰 손뼉을 치게하는 기능
  const clapCheck = (num) => {
    let str = String(num).split("");
    str.forEach((s) => {
      if (clapNum.includes(Number(s))) clap++;
    })
  }
}

problem3(13)
problem3(33)
// module.exports = problem3;
