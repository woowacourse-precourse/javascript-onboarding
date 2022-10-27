function problem2(cryptogram) {
  const pattern = /([a-z])\1/g;

  // Initial comparison
  /* 
    1. If cryptogram is already in simplifed form without any duplicated consecutive strings.
    2. Or if cryptogram has only one character.

    => Just return cryptogram itself.
  */
  if (!pattern.test(cryptogram) || cryptogram.length === 1) {
    return cryptogram;

    // If cryptogram still needs to be simplified, then move on.
  } else {
    let isDuplicated = pattern.test(cryptogram); // Initialization of whether simplified word has still duplicated strings.
    let simplified = cryptogram.replace(pattern, ""); // Simplified word

    // Keep continuing process until we get the desired result.
    while (true) {
      if (!pattern.test(simplified)) {
        // When there is no duplicated strings, stop and return it.
        return simplified;
        break;
      }

      isDuplicated = pattern.test(simplified); // Check if still duplicates
      simplified = simplified.replace(pattern, ""); // Simplify word once again
    }
  }
}

module.exports = problem2;
