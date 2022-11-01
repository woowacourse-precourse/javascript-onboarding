function problem3(number) {
  let claps = 0;
  let list = [];
  for (let i = 1; i <= number; i++) {
    list.push(i);
  } //performance issue?

  for (const item in list) {
    const listNumber = Array.from(String(list[item]));
    
    for (const num in listNumber) {
      switch(listNumber[num]) {
        case "3":
        case "6":
        case "9":
          claps++;
          break;
      }
    }
  }

  return claps;
}

module.exports = problem3;
