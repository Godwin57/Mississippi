import { ButtonType } from "@/types/componentTypes";
import { FC } from "react";

const Button: FC<ButtonType> = ({
    children,
    onClick,
    type,
    disabled,
    className,
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;

export const CommonButton: FC<ButtonType> = ({
    children,
    onClick,
    type,
    disabled,
    className,
}) => {
    return (
        <Button
            type={type}
            className={`text-center ${className} py-3 rounded-3xl`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

// name - I think it will be under the children parameter, onClick, type, disabled, className for any other styling I intend on applying
