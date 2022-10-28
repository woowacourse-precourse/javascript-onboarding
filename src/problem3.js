function problem3(number) {
  if (incorrectInput(number)) {
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

function incorrectInput(number) {
  if(number < 1 || number > 1000) return true;
  if(!Number.isInteger(number)) return true;
  if(number < 3) return true
  return false
}

module.exports = problem3;
