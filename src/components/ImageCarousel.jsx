import clsx from "clsx";
import object_one from "./../assets/me/one.jpg";

const Image = (
  <img
    className="w-[240px] aspect-square rounded-lg object-cover"
    src={object_one}
  />
);

function NumButton({ num, active = false, smallOnly = false }) {
  return (
    <button
      className={clsx(
        "px-4 rounded-md border-2 hover:bg-orange-100 transition-colors font-[Montserrat]",
        active
          ? "border-orange-500 text-black"
          : "border-transparent text-[#9A9A9A]",
          smallOnly && "max-sm:hidden"
      )}
    >
      {num}
    </button>
  );
}
function Elipses() {
  return (
    <button
      className={clsx(
        "px-4 rounded-md border-2 text-2xl transition-colors",
        "border-transparent text-[#9A9A9A]"
      )}
    >
      ...
    </button>
  );
}

export function ImageCarousel() {
  return (
    <div className="bdwag-red-300">
      <div className="flex flex-row gap-x-4 max-w-full overflow-scroll">
        {[...Array(10)].map(() => (
          <>{Image}</>
        ))}
      </div>
      {/*
       */}
      <div className="flex xs:justify-center mt-4 gap-x-1 overflow-scroll max-w-[90vw]">
        <button className="bg-orange-500 py-3 shrink-0 px-3.5 rounded-md hover:bg-orange-600 transition-colors">
          <img src="/arrow.svg" className="w-3" />
        </button>
        <NumButton num={1} />
        <NumButton num={2} />
        <NumButton num={3} active />
        <Elipses />
        <NumButton smallOnly num={12} />
        <NumButton smallOnly num={13} />
        <NumButton num={14} />
        <button className="bg-orange-500 py-3 shrink-0 px-3.5 rounded-md hover:bg-orange-600 transition-colors">
          <img src="/arrow.svg" className="w-3 rotate-180" />
        </button>
      </div>
    </div>
  );
}
