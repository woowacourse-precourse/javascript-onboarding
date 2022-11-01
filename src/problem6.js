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

function formatResult(result) {
  return result.sort();
}

function problem6(forms) {
  let cache = {
    result: [],
  };

  forms.forEach((form) => {
    cache = checkAndUpdateCache(form, cache);
  });

  return formatResult(cache.result);
}

module.exports = problem6;
