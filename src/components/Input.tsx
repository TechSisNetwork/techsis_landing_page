import { ChangeEvent, forwardRef, ReactElement } from "react";
// import { View, Hide } from "@/assets/svg";

type InputProps = {
  label?: string;
  name: string;
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  info?: string;
  required?: boolean;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  defaultValue?: string;
  inputClassName?:string
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      placeholder,
      value,
      type = "text",
      onChange,
      error,
      info,
      required,
      leftIcon,
      rightIcon,
      className,
      disabled,
      readOnly,
      defaultValue,
      inputClassName
    },
    ref
  ) => {
    // const [showPassword, togglePassword] = useState(false);

    // const handleTogglePassword = () => togglePassword(!showPassword);

    return (
      <div
        className={`${
          type == "checkbox" || type == "radio"
            ? "my-auto"
            : "flex flex-col gap-1 w-full"
        }`}
      >
        {label && (
          <label htmlFor={name} className="text-gray-900 w-fit">
            {label} {required && <span className="text-red-400">*</span>}
          </label>
        )}
        <div
          className={className}
          // className={`${
          //   type == "checkbox" || type == "radio"
          //     ? "flex"
          //     : "flex items-center gap-1 rounded-md px-4 py-3 bg-white border border-[#BCBBBB]"
          // } ${className}  ${error ? "border-red-300" : "border-gray-300"} ${
          //   disabled ? "!bg-gray-100 !border-gray-300 " : ""
          // }`}
        >
          {leftIcon && <>{leftIcon}</>}
          <input
            type={type}
            name={name}
            ref={ref}
            id={name}
            className={`${
              type == "checkbox" || type == "radio"
                ? " w-5 h-5 accent-product"
                : "flex-1 outline-none bg-white border-[#BCBBBB] placeholder:text-[#7D7D7D]"
            } ${disabled ? "!bg-gray-100 !text-gray-700 " : ""} ${inputClassName}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            defaultValue={defaultValue}
          />
          {rightIcon && <>{rightIcon}</>}
          {/* {type === "password" && (
            <>
              {showPassword ? (
                <Hide
                  onClick={handleTogglePassword}
                  className="cursor-pointer"
                />
              ) : (
                <View
                  onClick={handleTogglePassword}
                  className="cursor-pointer"
                />
              )}
            </>
          )} */}
        </div>
        {error && (
          <span className="text-red-400 text-sm first-letter:capitalize mt-1">
            {error}
          </span>
        )}
        {info && !error && (
          <span className="text-gray-500 text-sm">{info}</span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
