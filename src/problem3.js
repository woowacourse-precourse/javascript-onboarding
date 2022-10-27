function problem3(number) {
  let count_369 = 0;

  for (let i = 1; i <= number; i++) {
    let seperate_number_array = String(i).split("");

    for (let j = 0; j < seperate_number_array.length; j++) {
      if (
        seperate_number_array[j] === "3" ||
        seperate_number_array[j] === "6" ||
        seperate_number_array[j] === "9"
      )
        count_369++;
    }
  }
  return count_369;
}
module.exports = problem3;
