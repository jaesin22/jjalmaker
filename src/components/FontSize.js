import React from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { sizeInfo } from "../reducers/font";
import { useDispatch, useSelector } from "react-redux";

const sizes = [
  { name: 20 },
  { name: 30 },
  { name: 40 },
  { name: 50 },
  { name: 60 },
  { name: 70 },
  { name: 80 },
  { name: 90 },
  { name: 100 },
];

const FontSize = () => {
  const dispatch = useDispatch();

  const { size } = useSelector((state) => state.bannerInfo);

  const changeSize = (selected) => {
    // store에 있는 state 바꾸는 함수 실행
    dispatch(sizeInfo(selected.name));
  };

  const menu = (
    <Menu
      style={{ border: "1px solid #d9d9d9", borderRadius: "2px" }}
      className="w-20"
    >
      {sizes.map((size, index) => (
        <Menu.Item key={index} onClick={() => changeSize(size)}>
          {size.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div
      className="flex w-20 bg-white"
      style={{ border: "1px solid #d9d9d9", borderRadius: "2px" }}
    >
      <Dropdown overlay={menu} className="ant-dropdown-link">
        <a
          href="font size dropdown"
          className="ant-dropdown-link text-black bolder font-bold"
          onClick={(e) => e.preventDefault()}
        >
          <span className="ml-2 text-base text-black">{size}</span>
          <DownOutlined style={{ color: "#e9ecef" }} className="h-6 ml-7" />
        </a>
      </Dropdown>
    </div>
  );
};

export default React.memo(FontSize);
