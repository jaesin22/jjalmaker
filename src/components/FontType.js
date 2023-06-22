import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import "../styles/App.css";
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

  return (
    <div className="flex flex-row mt-12 w-96">
      <label className="flex-none mr-3 pt-2">폰트 종류</label>
      <Listbox
        value={selected}
        onChange={handleFontTypeChange}
        className="absolute ml-32"
      >
        <div className="mt-1">
          <Listbox.Button
            className="cursor-default rounded-lg w-64 2xl:w-96
           bg-[#222933] text-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none sm:text-sm"
          >
            <span
              className="block truncate"
              style={{ fontFamily: `${selected.name}` }}
            >
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Listbox.Options
            className="max-h-60 w-64 overflow-auto rounded-lg
             bg-[#222933] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            {font.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-2 pr-4 text-left z-20 text-white ${
                    active ? "bg-[#313846] text-white" : "bg-[#222933]"
                  }`
                }
                style={{ fontFamily: `${person.name}` }}
                value={person}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium text-[#00adff]" : "font-normal"
                      }`}
                    >
                      {person.name}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default FontType;
