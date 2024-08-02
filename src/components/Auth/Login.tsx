"use client";
import { useEffect, useRef, useState, MouseEvent } from "react";
import Image from "next/image";
import Input from "../form/Input";
import { isValidEmail } from "@/lib/utils";
import { IoMdCheckmark } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CommonButton } from "../Button";

type LoginInputErrType = {
    val: boolean;
    msg: string;
};

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [err, setErr] = useState({ val: false, msg: "" });
    const emailRef = useRef<HTMLInputElement>();
    const [err, setErr] = useState<LoginInputErrType>();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Working now");

        if (!isValidEmail(email)) {
            setErr({ val: true, msg: "Enter a valid email address" });
            return;
        } else {
            setErr({ val: false, msg: "" });
        }
    };

    // This would be activated when the submit button is now active
    useEffect(() => {
        setErr((_) => undefined);
    }, [email]);

    return (
        <div>
            <form className="space-y-3 flex flex-col">
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail((_) => e.target.value)}
                    withRightElement
                    refHolder={emailRef}
                    err={err}
                    rightElement={
                        err?.hasOwnProperty("val") ? (
                            !err?.val ? (
                                <IoMdCheckmark className="text-success-color text-[16px]" />
                            ) : (
                                <HiMiniXMark className="text-err-color text-[16px]" />
                            )
                        ) : (
                            <MdOutlineMailOutline />
                        )
                    }
                />
                <Input
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
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
                <p className="flex items-center gap-2 justify-end text-[14px]">
                    Forgot your password?{" "}
                    <FaLongArrowAltRight className="text-err-color text-[14px]" />
                </p>

                <CommonButton
                    type={"button"}
                    onClick={handleSubmit}
                    className={`bg-button-bg mt-4`}
                >
                    <span className="text-white text-[16px]">Login</span>
                </CommonButton>
            </form>

            <div className="flex flex-col items-center mt-40">
                <p className="text-[14px]">Or login with social account</p>
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

export default Login;
