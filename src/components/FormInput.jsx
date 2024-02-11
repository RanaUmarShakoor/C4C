export function FormInput({ label, type, placeholder, color = 1 }) {
  let border = " border-orange-500";
  if (color == 2) border = " border-blue-500";

  return (
    <div className="flex flex-col gap-1 md:w-[360px]">
      <label htmlFor="" className="font-medium text-left">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={"px-4 py-2  border-[1px] rounded-md " + border}
      />
    </div>
  );
}
