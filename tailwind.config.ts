import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                lightGray: "rgba(249, 249, 249, 1)",
                "lightGray-placeholder": "rgba(155, 155, 155, 1)",
            },
        },
    },
    plugins: [],
};
export default config;
