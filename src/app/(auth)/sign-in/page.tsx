import { MdArrowBackIos } from "react-icons/md";
import Login from "@/components/Auth/Login";

const page = () => {
    return (
        <main>
            <div className="flex flex-col gap-y-5">
                <MdArrowBackIos className="text-[16px] font-bold" />
                <h1 className="text-[34px] font-bold mb-5">Login</h1>
                <Login />
            </div>
        </main>
    );
};

export default page;
