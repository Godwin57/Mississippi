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
                "err-color": "rgba(240, 31, 14, 1)",
                "success-color": "rgba(42, 169, 82, 1)",
                "button-bg": "rgba(219, 48, 34, 1)",
            },
        },
    },
    plugins: [],
};
export default config;
