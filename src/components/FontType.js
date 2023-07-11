import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fontType } from "../reducers/font";

const font = [
  { name: "SANJUGotgam", fontFamily: "SANJUGotgam", size: "14px" },
  { name: "Gowun Dodum", fontFamily: "Gowun Dodum", size: "14px" },
  { name: "JSongMyung", fontFamily: "JSongMyung", size: "14px" },
  { name: "Nanum Gothic", fontFamily: "Nanum Gothic", size: "14px" },
  { name: "Nanum Pen Script", fontFamily: "Nanum Pen Script", size: "14px" },
  { name: "CookieRunOTF-Bold", fontFamily: "CookieRunOTF-Bold", size: "11px" },
  { name: "Nanum Myeongjo", fontFamily: "Nanum Myeongjo", size: "14px" },
  { name: "Noto Sans KR", fontFamily: "Noto Sans KR", size: "14px" },
  {
    name: "Nanum Gothic Coding",
    fontFamily: "Nanum Gothic Coding",
    size: "12px",
  },
];

const FontType = () => {
  const dispatch = useDispatch();

  const { fttype } = useSelector((state) => state.bannerInfo);

  const changeType = (selected) => {
    // store에 있는 state 바꾸는 함수 실행
    dispatch(fontType(selected.name));
  };

  const menu = (
    <Menu
      style={{ border: "1px solid #d9d9d9", borderRadius: "2px" }}
      className="w-36 lg:w-44"
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

  const selectedFontSize = font.find(
    (fontItem) => fontItem.name === fttype
  )?.size;

  return (
    <div
      className="flex bg-white w-36 h-7 lg:w-44 lg:h-8"
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
              fontFamily: fttype,
              color: "black",
              fontSize: selectedFontSize,
              textAlign: "left",
            }}
            className="ml-2"
          >
            {fttype}
          </span>
          <DownOutlined
            style={{ color: "#e9ecef" }}
            className="ml-1 lg:w-11 lg:ml-2"
          />
        </a>
      </Dropdown>
    </div>
  );
};

export default FontType;
