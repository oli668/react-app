import cloudbase from "@cloudbase/js-sdk";
import {
  CLOUD_FETCH_ALL_COCKTAILS,
  CLOUD_FETCH_ALL_COCKTAILS_DETAILS,
  ENV,
} from "constants/globals";

const app = cloudbase.init({
  env: ENV,
});
const auth = app.auth();
export const loginCloudServer = async () => {
  await auth.anonymousAuthProvider().signIn();
  const loginState = await auth.getLoginState();
  if (loginState) {
    console.log("login cloud successfully!");
    return true;
  }
  return;
};

export const tcbFetchAllCocktails = async () => {
  const res = await app.callFunction({
    // 云函数名称
    name: CLOUD_FETCH_ALL_COCKTAILS,
    // 传给云函数的参数
  });
  return res;
};

export const tcbFetchCocktailsDetails = async () => {
  const res = await app.callFunction({
    name: CLOUD_FETCH_ALL_COCKTAILS_DETAILS,
  });
  return res;
};
