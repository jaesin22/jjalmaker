import { useState } from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

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

const FontSize = ({ onSize }) => {
  const [selected, setSelected] = useState(sizes[4]);

  const handleSelection = (selected) => {
    setSelected(selected);
    onSize(selected.name); // 선택된 값을 부모 컴포넌트로 전달
  };

  const menu = (
    <Menu
      style={{ border: "1px solid #d9d9d9", borderRadius: "2px" }}
      className="w-20"
    >
      {sizes.map((size, index) => (
        <Menu.Item key={index} onClick={() => handleSelection(size)}>
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
          <span className="ml-2 text-base text-black">{selected.name}</span>
          <DownOutlined style={{ color: "#e9ecef" }} className="h-6 ml-7" />
        </a>
      </Dropdown>
    </div>
  );
};

export default FontSize;
