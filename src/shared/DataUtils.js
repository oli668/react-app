import CryptoJS from "crypto-js";
import { ENV } from "constants/globals";
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

export const processingIBAcocktails = (data) => {
  // data.map((item) => {
  //   let newItem = {}
  //   newItem.name = item.name
  //   newItem.base =
  //   return newItem
  // });
};

export const decrypt = (data) => {
  var bytes = CryptoJS.AES.decrypt(data, ENV);
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};
