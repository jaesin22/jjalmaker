import { useState } from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

const sizes = [
  { name: 20 },
  { name: 25 },
  { name: 30 },
  { name: 35 },
  { name: 40 },
  { name: 45 },
];

const FontSize = ({ onSize }) => {
  const [selected, setSelected] = useState(sizes[2]);

  const handleSelection = (selected) => {
    setSelected(selected);
    onSize(selected.name); // 선택된 값을 부모 컴포넌트로 전달
  };

  const menu = (
    <Menu>
      {sizes.map((size, index) => (
        <Menu.Item key={index} onClick={() => handleSelection(size)}>
          {size.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="flex mx-1">
      <Dropdown overlay={menu}>
        <a
          href="font size dropdown"
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
        >
          <span style={{ fontFamily: selected.fontFamily, color: "#ffffff" }}>
            {selected.name}
          </span>
          <DownOutlined style={{ color: "#e9ecef" }} />
        </a>
      </Dropdown>
    </div>
  );
};

export default FontSize;
