import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Preview from "../Func/Preview";

const FontColor = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState("");

  const handleButtonClick = () => {
    setShowPicker(!showPicker);
  };

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  return (
    <div className="flex flex-row mt-12 w-96">
      <label className="flex-none mr-3">폰트 색상</label>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md
           bg-white px-3 py-2 text-sm font-semibold
           text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleButtonClick}
        >
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
        <Transition
          show={showPicker}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <SketchPicker
            color={color}
            onChange={handleChangeComplete}
            className="absolute"
          />
          <Preview setColor={color} />
        </Transition>
      </Menu>
    </div>
  );
};

export default FontColor;
