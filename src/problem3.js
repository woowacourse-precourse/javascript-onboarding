function problem3(number) {
  if (!inputValidCheck(number)) {
    return 'error'
  }
  const regEx = /[369]/g;
  const array = Array(number).fill()
  .map((_, index) => String(index + 1))
  .map((v) => v.replace(regEx, '@'))
  .filter(v => v.includes('@'))
  .join('')
  .match(/@/g);
  
  return array.length
}

function inputValidCheck(number) {
  if(number < 1 || number > 1000) return false;
  if(!Number.isInteger(number)) return false;
  return true
}

module.exports = problem3;
