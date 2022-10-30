function problem2(cryptogram) {

}

const removeDuplicate = (cryptogram) => {
  return cryptogram.replace(/([a-z])\1+/g, "")
}

const isNotDuplicate = (cryptogram) => {
  return !(/([a-z])\1+/g.test(cryptogram))
}

module.exports = problem2;
