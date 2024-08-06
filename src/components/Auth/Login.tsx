"use client";
import { useEffect, useRef, useState, MouseEvent } from "react";
import Image from "next/image";
import Input from "../form/Input";
import { isValidEmail } from "@/lib/utils";
import { isValidPassword } from "@/lib/utils";
import { IoMdCheckmark } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CommonButton } from "../Button";
import Link from "next/link";
import fbIcon from "../../assets/fb-icon.png";
import googleIcon from "../../assets/google-icon.png";

// Made the err val here a string so I can also use this same object as the err object for the password field
type LoginInputErrType = {
    val: boolean;
    msg: string;
};

type ErrType = {
    email: LoginInputErrType;
    password: LoginInputErrType;
};

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef<HTMLInputElement>();
    const [err, setErr] = useState<ErrType>({
        email: { val: false, msg: "" },
        password: { val: false, msg: "" },
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Working now");

        if (!isValidEmail(email)) {
            setErr({
                ...err,
                email: { val: true, msg: "Enter a valid email address" },
            });
            return;
        }

        if (!isValidPassword(password)) {
            setErr({
                ...err,
                password: {
                    val: true,
                    msg: "Password must not be less than 8 characters, not greater than 12, and must include an uppercase letter, a special character and a number",
                },
            });
        }
    };

    useEffect(() => {
        setErr({
            ...err,
            email: { val: false, msg: "" },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email]);

    useEffect(() => {
        setErr({
            ...err,
            password: { val: false, msg: "" },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [password]);

    return (
        <div>
            <form className="space-y-3 flex flex-col">
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail((_) => e.target.value)}
                    withRightElement={err.email.val}
                    refHolder={emailRef}
                    err={err.email}
                    rightElement={
                        <HiMiniXMark className="text-err-color text-[16px]" />
                    }
                />
                <Input
                    placeholder="Password"
                    value={password}
                    required
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
                    className="flex items-center gap-2 justify-end text-[14px] text-blue-400"
                    href={"/sign-up"}
                >
                    Don&apos;t have an account? Sign up{" "}
                    <FaLongArrowAltRight className="text-err-color text-[14px]" />
                </Link>

                <CommonButton
                    type={"button"}
                    onClick={handleSubmit}
                    className={`bg-button-bg mt-4`}
                >
                    <span className="text-white text-[16px]">Login</span>
                </CommonButton>
            </form>

            <div className="flex flex-col items-center mt-40">
                <p className="text-[14px]">Or Sign up with social account</p>
                <div className={`flex gap-x-3`}>
                    <CommonButton
                        type="button"
                        className={`h-[64px] w-[92px] bg-white flex justify-center items-center`}
                        onClick={(e) => console.log("clicked")}
                    >
                        <Image
                            alt="Google logo"
                            src={googleIcon}
                            height={24}
                            width={24}
                        />
                    </CommonButton>
                    <CommonButton
                        type="button"
                        className={`h-[64px] w-[92px] bg-white flex justify-center items-center`}
                        onClick={(e) => console.log("clicked")}
                    >
                        <Image
                            alt="Facebook logo"
                            src={fbIcon}
                            height={24}
                            width={24}
                        />
                    </CommonButton>
                </div>
            </div>
        </div>
    );
};

export default Login;
