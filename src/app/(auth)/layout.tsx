import { Metadata } from "next";
import "../globals.css";

export const metaData: Metadata = {
    title: "Mississippi's authentication page",
    description:
        "This is the authentication page of World's best ecommerce brand, Mississippi",
};

export default function AuthLayout({
    children,
}: {
    readonly children: React.ReactNode;
}) {
    return (
        <div className="bg-lightGray min-h-screen py-10 px-5">{children}</div>
    );
}
