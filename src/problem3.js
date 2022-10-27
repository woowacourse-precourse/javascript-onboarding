function problem3(number) {
  let allNumbers = Array.from({length: number}, (_,i) => i+1).join('')

  return allNumbers
}

console.log(problem3(20));

// module.exports = problem3;