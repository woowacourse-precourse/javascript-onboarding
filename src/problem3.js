function problem3(number) {
  let clap = 0;
  for (let i = 1; i <= number; i++) {
    const splited = i.toString().split("");
    const length = splited.length;
    for (let j = 0; j < length; j++) {
      if (parseInt(splited[j]) % 3 === 0 && splited[j] !== "0") clap++;
    }
  }
  return clap;
}
module.exports = problem3;
