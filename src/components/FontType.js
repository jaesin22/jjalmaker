import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import FontSize from "./FontSize";
import FontColor from "./FontColor";
const font = [
  { name: "Nanum Gothic" },
  { name: "Gulim" },
  { name: "Arial" },
  { name: "Helvetica" },
];

const FontType = () => {
  const [selected, setSelected] = useState(font[0]);

  return (
    <div className="flex flex-row mt-12 w-64">
      <label className="flex-none mr-3 pt-2">원본 대사</label>
      <Listbox value={selected} onChange={setSelected}>
        <div className="flex-none mt-1">
          <Listbox.Button
            className="relative w-full cursor-default rounded-lg
           bg-[#222933] text-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none sm:text-sm"
          >
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Listbox.Options
            className="max-h-60 w-full overflow-auto rounded-lg
             bg-[#222933] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            {font.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-2 pr-4 text-left text-white ${
                    active ? "bg-[#313846] text-white" : "bg-[#222933]"
                  }`
                }
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
      <FontSize />
      <FontColor />
    </div>
  );
};

export default FontType;
