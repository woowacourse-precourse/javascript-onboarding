function problem3(number) {
  let count_369 = 0;

  for (let i = 1; i <= number; i++) {
    let number_array = String(i).split("");

    for (let j = 0; j < number_array.length; j++) {
      if (number_array[j] === "3" || number_array[j] === "6" || number_array[j] === "9")
        count_369++;
    }
  }
  return count_369;
}

module.exports = problem3;
