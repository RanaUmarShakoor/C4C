import { FormInput } from "components/FormInput";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export function ChangePasswordModal({
  color = 1,
  // onChange = () => {},
  // onBack = () => {},
}) {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 p-6 rounded-[8px] bg-white">
      <h1
        className={clsx(
          "font-semibold text-2xl text-center",
          color == 1 ? "text-orange-500" : "text-blue-500"
        )}
      >
        Change password
      </h1>
      <FormInput
        label="Enter your current password"
        type="password"
        placeholder="**********"
        color={color}
      />
      <FormInput
        label="Enter your new password"
        type="password"
        placeholder="**********"
        color={color}
      />
      <FormInput
        label="Repeat the password"
        type="password"
        placeholder="**********"
        color={color}
      />
      <button
        onClick={() => navigate(-1)}
        className={clsx(
          "py-2 rounded-lg",
          color == 1 ? "bg-orange-500" : "bg-blue-500"
        )}
      >
        <div className="flex items-center justify-center gap-2 text-white">
          Change Password
        </div>
      </button>
      <button
        onClick={() => navigate(-1)}
        className={clsx(
          "font-medium underline text-center",
          color == 1 ? "text-orange-500" : "text-blue-500"
        )}
      >
        Back
      </button>
    </div>
  );
}
