function problem3(number) {
  if (checkInputValid(number)) {
    return 0
  }
  const regEx = /[369]/g;
  const array = Array(number).fill()
  .map((_, index) => String(index + 1))
  .map((v) => v.replace(regEx, '@'))
  .filter(v => v.includes('@'))
  .join('')
  .match(/@/g);
  
  return array.length;
}

function checkInputValid(number) {
  if(number < 3) return true
  return false
}

module.exports = problem3;
