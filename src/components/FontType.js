import { useState } from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fontType } from "../reducers/font";

const font = [
  { name: "SANJUGotgam", fontFamily: "SANJUGotgam" },
  { name: "Gowun Dodum", fontFamily: "Gowun Dodum" },
  { name: "JSongMyung", fontFamily: "JSongMyung" },
  { name: "Nanum Gothic", fontFamily: "Nanum Gothic" },
  { name: "Nanum Pen Script", fontFamily: "Nanum Pen Script" },
  { name: "CookieRunOTF-Bold", fontFamily: "CookieRunOTF-Bold" },
  { name: "Nanum Myeongjo", fontFamily: "Nanum Myeongjo" },
  { name: "Noto Sans KR", fontFamily: "Noto Sans KR" },
  { name: "Nanum Gothic Coding", fontFamily: "Nanum Gothic Coding" },
];

const FontType = () => {
  const dispatch = useDispatch();

  const { type } = useSelector((state) => state.bannerInfo);

  const changeType = (selected) => {
    // store에 있는 state 바꾸는 함수 실행
    dispatch(fontType(selected.name));
  };

  const menu = (
    <Menu
      style={{ border: "1px solid #d9d9d9", borderRadius: "2px" }}
      className="w-44"
    >
      {font.map((fontItem, index) => (
        <Menu.Item
          key={index}
          style={{ fontFamily: fontItem.fontFamily }}
          onClick={() => changeType(fontItem)}
        >
          {fontItem.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div
      className="flex bg-white w-44"
      style={{ border: "1px solid #d9d9d9", borderRadius: "2px" }}
    >
      <Dropdown overlay={menu}>
        <a
          href="font dropdown"
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
        >
          <span
            style={{
              fontFamily: type,
              color: "black",
              fontSize: "14px",
            }}
            className="ml-2"
          >
            {type}
          </span>
          <DownOutlined
            style={{ color: "#e9ecef" }}
            className="h-6 w-11 ml-2"
          />
        </a>
      </Dropdown>
    </div>
  );
};

export default FontType;
// 1px solid #d9d9d9
