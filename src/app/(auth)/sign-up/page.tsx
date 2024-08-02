import Signup from "@/components/Auth/Signup";
import { MdArrowBackIos } from "react-icons/md";

const page = () => {
    return (
        <main className="flex flex-col gap-y-5">
            <MdArrowBackIos className="text-[16px] font-bold" />
            <h1 className="text-[34px] font-bold mb-5">Sign up</h1>
            <Signup />
        </main>
    );
};

export default page;
