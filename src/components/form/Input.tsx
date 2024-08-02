import { InputTypes } from "@/types/componentTypes";
import { FC } from "react";

const Input: FC<InputTypes> = ({
    placeholder,
    label,
    withRightElement,
    rightElement,
    withLeftElement,
    leftElement,
    err, //This should be an object containing a boolean err: true|false and then a message
    value,
    type,
    refHolder,
    className,
    onChange,
    required,
}) => {
    return (
        <div>
            <div className="relative">
                {value.length > 0 && (
                    <div
                        className={`absolute ${
                            withLeftElement ? "left-12" : "left-4"
                        } text-[13px] text-lightGray-placeholder`}
                    >
                        {placeholder}
                    </div>
                )}
                <input
                    type={type}
                    value={value}
                    ref={refHolder}
                    required
                    placeholder={placeholder}
                    className={`${className} bg-white py-4 rounded-md ${
                        withRightElement ? "pr-12" : "pr-4"
                    } ${withLeftElement ? "pl-12" : "pl-4"} w-full ${
                        err?.val ? "border border-err-color" : ""
                    }`}
                    onChange={onChange}
                />
                {withLeftElement && (
                    <div className="absolute inset-y-0 left-2 flex items-center pl-1">
                        {leftElement}
                    </div>
                )}
                {withRightElement && (
                    <div className="absolute inset-y-0 right-2 flex items-center pr-1">
                        {rightElement}
                    </div>
                )}
            </div>
            {err?.val && (
                <div className="text-red-600 text-[13px] text-center">
                    {err.msg}
                </div>
            )}
        </div>
    );
};

export default Input;
