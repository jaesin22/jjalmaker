import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const size = [
  { name: 15 },
  { name: 20 },
  { name: 25 },
  { name: 30 },
  { name: 35 },
  { name: 40 },
  { name: 45 },
];

const FontSize = () => {
  const [selected, setSelected] = useState(size[3]);

  return (
    <div className="flex ml-20 w-full">
      <label className="flex-none mr-3">폰트 크기</label>
      <Listbox value={selected} onChange={setSelected}>
        <div className="mt-1">
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
            {size.map((person, personIdx) => (
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
    </div>
  );
};

export default FontSize;
