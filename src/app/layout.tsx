import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Mississippi",
    description: "Ecommerce site built just for practice",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
