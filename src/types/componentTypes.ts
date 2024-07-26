import { ChangeEvent } from "react";

export interface InputTypes {
    placeholder?: string;
    label?: string;
    withRightElement?: boolean;
    rightElement?: JSX.Element;
    withLeftElement?: boolean;
    leftElement?: JSX.Element;
    err?: {
        val: boolean;
        msg: string;
    };
    value: string;
    type?: "text" | "password" | "check";
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
