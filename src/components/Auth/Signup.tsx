"use client";
import { useEffect, useRef, useState, MouseEvent } from "react";
import Image from "next/image";
import Input from "../form/Input";
import { isValidEmail } from "@/lib/utils";
import { IoMdCheckmark } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CommonButton } from "../Button";
import Link from "next/link";

type SignupInputErrType = {
    val: boolean;
    msg: string;
};

type ErrType = {
    name: SignupInputErrType;
    email: SignupInputErrType;
    password: SignupInputErrType;
};

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nameRef = useRef<HTMLInputElement>();
    const [err, setErr] = useState<ErrType>({
        name: { val: false, msg: "" },
        email: { val: false, msg: "" },
        password: { val: false, msg: "" },
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showErrIcon, setShowErrIcon] = useState(false);

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Working now");

        setShowErrIcon((_) => true);
        if (name.length < 5 || name.length > 8) {
            setErr({
                ...err,
                name: {
                    val: true,
                    msg: "Your name must have a 5 characters minimum and 8 maximum",
                },
            });
            return;
        }

        if (!isValidEmail(email)) {
            setErr({
                ...err,
                email: { val: true, msg: "Enter a valid email address" },
            });
            return;
        }

        if (!password) {
            setErr({
                ...err,
                password: {
                    val: true,
                    msg: "Password must not be less than 8 characters, and must include an uppercase letter, a special character and a number",
                },
            });
        }
    };

    useEffect(() => {
        setErr({ ...err, name: { val: false, msg: "" } });
    }, [name]);

    useEffect(() => {
        setErr({ ...err, email: { val: false, msg: "" } });
    }, [email]);

    useEffect(() => {
        setErr({ ...err, password: { val: false, msg: "" } });
    }, [password]);

    return (
        <div>
            <form className="space-y-3 flex flex-col">
                <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName((_) => e.target.value)}
                    refHolder={nameRef}
                    withRightElement={showErrIcon}
                    err={err?.name}
                    rightElement={
                        !err?.name.val ? (
                            <IoMdCheckmark className="text-success-color text-[16px]" />
                        ) : (
                            <HiMiniXMark className="text-err-color text-[16px]" />
                        )
                    }
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail((_) => e.target.value)}
                    withRightElement={showErrIcon}
                    err={err?.email}
                    rightElement={
                        !err?.email.val ? (
                            <IoMdCheckmark className="text-success-color text-[16px]" />
                        ) : (
                            <HiMiniXMark className="text-err-color text-[16px]" />
                        )
                    }
                />
                <Input
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    err={err.password}
                    withRightElement
                    rightElement={
                        showPassword ? (
                            <GoEye
                                onClick={(e) => setShowPassword((_) => false)}
                            />
                        ) : (
                            <GoEyeClosed
                                onClick={(e) => setShowPassword((_) => true)}
                            />
                        )
                    }
                />
                <Link
                    className="flex items-center gap-2 justify-end text-[14px]"
                    href={"/sign-in"}
                >
                    Already have an account?{" "}
                    <FaLongArrowAltRight className="text-err-color text-[14px]" />
                </Link>

                <CommonButton
                    type={"submit"}
                    onClick={handleSubmit}
                    className={`bg-button-bg`}
                >
                    <span className="text-white text-[16px]">Sign up</span>
                </CommonButton>
            </form>

            <div className="flex flex-col items-center mt-40">
                <p className="text-[14px]">Or Sign up with social account</p>
                <div>
                    <CommonButton
                        type="button"
                        onClick={(e) => console.log("clicked")}
                    >
                        <Image
                            alt="Google logo"
                            src={""}
                            height={24}
                            width={24}
                        />
                    </CommonButton>
                    <CommonButton
                        type="button"
                        onClick={(e) => console.log("clicked")}
                    >
                        <Image
                            alt="Facebook logo"
                            src={""}
                            height={24}
                            width={24}
                        />
                    </CommonButton>
                </div>
            </div>
        </div>
    );
};

export default Signup;
