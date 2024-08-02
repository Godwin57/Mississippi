import { ChangeEvent, LegacyRef, MutableRefObject } from "react";

export interface InputTypes {
    placeholder?: string;
    label?: string;
    withRightElement?: boolean;
    rightElement?: JSX.Element;
    required?: boolean;
    withLeftElement?: boolean;
    leftElement?: JSX.Element;
    err?: {
        val: boolean;
        msg: string;
    };
    value: string;
    type?: "text" | "password" | "check" | "email";
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    refHolder?:
        | LegacyRef<HTMLInputElement>
        | MutableRefObject<HTMLInputElement | undefined>
        | undefined;
}

export interface ButtonType {
    children?: JSX.Element;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "submit" | "reset" | "button" | undefined;
    className?: string;
    disabled?: boolean;
}
