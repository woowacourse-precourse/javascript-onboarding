function problem3(number) {
  var answer;
  let clap = 0;

  for(let i=1; i<=number; i++){
    let arr = i.toString();
    let count3 = arr.split("3").length-1;
    let count6 = arr.split("6").length-1;
    let count9 = arr.split("9").length-1;
    clap += (count3+count6+count9)
  }
  answer = clap;
  return answer;
}

module.exports = problem3;