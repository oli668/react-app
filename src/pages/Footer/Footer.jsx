import React from "react";
import { useHistory } from "react-router-dom";

export const Footer = ({ footerStyle }) => {
  const history = useHistory();
  return (
    <>
      <div className={footerStyle.color}>
        <footer className="flex flex-wrap items-center justify-between p-3 m-auto">
          <div className="container mx-auto flex flex-col flex-wrap items-center justify-between text-xs md:text-base">
            <ul className={`flex mx-auto text-center ${footerStyle.textColor}`}>
              <li className="p-2 cursor-pointer hover:underline">
                用户服务协议
              </li>
              <li className="p-2 cursor-pointer hover:underline">隐私政策</li>
              <li className="p-2 cursor-pointer hover:underline">联系我们</li>
              <li
                className="p-2 cursor-pointer hover:underline"
                onClick={() => {
                  history.push("/cocktails");
                }}
              >
                我们的产品
              </li>
              <li className="p-2 cursor-pointer hover:underline">加入我们</li>
            </ul>
            <div
              className={`flex mx-auto ${footerStyle.textColor} text-center flex-col md:flex-row`}
            >
              <p>咕噜铁汁科技（杭州）有限公司 ©2021</p>
              <a
                className="cursor-pointer hover:underline"
                href="https://beian.miit.gov.cn/"
              >
                <span className="px-4">
                  浙ICP备2021023461号-1 工信部ICP备案
                </span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
