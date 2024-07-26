import React from "react";
import Link from "next/link";

const page = () => {
    return (
        <main>
            <h1 className="font-extrabold text-xl">Mississippi</h1>
            <p>Homepage</p>
            <Link href={"/sign-in"}>Sign in or sign up</Link>
        </main>
    );
};

export default page;
