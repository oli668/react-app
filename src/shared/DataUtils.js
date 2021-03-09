export const flattenNestedObject = (tgt, prefix) => {
  if (!tgt) return {};
  return Object.keys(tgt).reduce((messages, key) => {
    const value = tgt[key];
    const prefiexedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "object" && Object.keys(value).length) {
      Object.assign(messages, flattenNestedObject(value, prefiexedKey));
    } else {
      Object.assign(messages, { [prefiexedKey]: value });
    }
    return messages;
  }, {});
};
