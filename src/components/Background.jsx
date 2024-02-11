import map_bg from "./../assets/map_bg.png";

export function Background() {
  return (
    <>
      <img
        src={map_bg}
        alt=""
        className="absolute overflow-hidden -z-50 top-0 left-0 w-full h-full object-cover"
      />
      <div className="flex absolute -z-40 h-full w-full">
        <div className="flex-1 bg-gradient-to-r from-[#FFA50000] to-[#FFA5004D]" />
        <div className="flex-1 bg-gradient-to-r from-[#0070FF4D] to-[#0070FF1A]" />
      </div>
    </>
  );
}
