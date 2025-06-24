import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const DropDown = ({ clickedRegion }) => {
  const [iconArrow, setIconArrow] = useState(false);
  const [regions, setRegions] = useState([
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Polar",
    "Antarctic Ocean",
    "...",
  ]);

  const [pickedRegion, setPickedRegion] = useState("Filter by Region");

  return (
    <div
      onClick={() => {
        setIconArrow(!iconArrow);
      }}
      className="relative custom-text-color"
    >
      <div className="flex items-center w-[200px] shadow-sm rounded-md p-3 justify-between px-5 bg-elements">
        <p className="sm:text-sm text-[12px]">{pickedRegion}</p>
        <MdKeyboardArrowDown
          className={`transform ${
            iconArrow ? "rotate-0" : "rotate-180"
          } transition-transform duration-500 ease-in-out`}
        />
      </div>
      {/* ================ */}

      {iconArrow && (
        <ul className="font-light shadow-sm rounded-md flex flex-col bg-white text-start gap-1.5 py-3 items-start text-sm absolute top-13 w-[200px] bg-elements">
          {regions.map((region) => {
            return (
              <li
                key={region}
                onClick={() => {
                  setPickedRegion(
                    region === "..." ? "Filter by Region" : region
                  );
                  clickedRegion(region);
                }}
                className="cursor-pointer hover:bg-gray-300 w-full px-5 py-1.5 sm:text-[16px] text-[12px]"
              >
                {region}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
