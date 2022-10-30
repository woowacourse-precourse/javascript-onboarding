function problem2(cryptogram) {
  console.log(removeDuplicate(cryptogram))
}

const removeDuplicate = (cryptogram) => {
  return cryptogram.replace(/([a-z])\1+/g, "")
}

module.exports = problem2;
