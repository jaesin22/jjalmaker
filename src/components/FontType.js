import { useState } from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

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

const FontType = ({ onFontTypeChange }) => {
  const [selected, setSelected] = useState(font[0]);

  const handleFontTypeChange = (fontItem) => {
    const { name } = fontItem;
    setSelected(fontItem);
    onFontTypeChange(name);
  };

  const menu = (
    <Menu>
      {font.map((fontItem, index) => (
        <Menu.Item
          key={index}
          style={{ fontFamily: fontItem.fontFamily }}
          onClick={() => handleFontTypeChange(fontItem)}
          className="border-solid"
        >
          {fontItem.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="flex">
      <Dropdown overlay={menu} className="bg-white w-44">
        <a
          href="font dropdown"
          className="ant-dropdown-link text-black border-solid border-1 border-white rounded-sm"
          onClick={(e) => e.preventDefault()}
        >
          <span
            style={{
              fontFamily: selected.fontFamily,
              color: "black",
              fontSize: "14px",
            }}
            className="ml-2"
          >
            {selected.name}
          </span>
          <DownOutlined
            style={{ color: "#e9ecef" }}
            className="h-6 w-12 ml-2"
          />
        </a>
      </Dropdown>
    </div>
  );
};

export default FontType;
// 1px solid #d9d9d9
