const cloudbase = require("@cloudbase/node-sdk");
const app = cloudbase.init({
  env: "react-oli-8ggs2ctm06f2f6a4",
});
// 1. 获取数据库引用
var db = app.database();
exports.main = async (event, context) => {
  const res = await db.collection("cocktails_details").get();
  return {
    res,
  };
};