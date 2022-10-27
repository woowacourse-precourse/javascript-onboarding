function problem2(cryptogram) {
  return removeDuplicates(cryptogram);
}

function removeDuplicates(cryptogram) {
  const DEDUPLICATED_PATTERN = /([a-z])\1{1,}/g;
  const deduplicatedCryptogram = cryptogram.replace(DEDUPLICATED_PATTERN, '');
  return cryptogram === deduplicatedCryptogram
    ? cryptogram
    : removeDuplicates(deduplicatedCryptogram);
}

module.exports = problem2;
