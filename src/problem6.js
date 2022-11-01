function checkAndUpdateCache(form, cache) {
  const [email, nickname] = form;
  const newCache = { ...cache, result: [...cache.result] };

  for (let i = 0; i < nickname.length - 1; i++) {
    const piece = nickname.slice(i, i + 2);

    newCache[piece]
      ? (newCache.result = [...newCache.result, ...newCache[piece], email])
      : (newCache[piece] = [email]);
  }

  newCache.result = [...new Set(newCache.result)];

  return newCache;
}

function problem6(forms) {
  let cache = {
    result: [],
  };

  forms.forEach((form) => {
    cache = checkAndUpdateCache(form, cache);
  });

  return cache.result.sort();
}

module.exports = problem6;
