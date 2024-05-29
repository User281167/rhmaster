import { nextui } from "@nextui-org/theme";
import { Limelight } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/components/(button|link|navbar|ripple|spinner).js",
    ],
    theme: {
        extend: {
            colors: {
                "main-blue": "#046BD2",
                "main-dark-blue": "#02376C",
                "main-white": "#FAFEFF",
                "main-gray": "#4A5257",
            },
        },
    },
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        primary: {
                            DEFAULT: "#046BD2",
                            foreground: "#fff",
                        },
                        secondary: {
                            DEFAULT: "#fff",
                            foreground: "#000",
                        },
                        default: {
                            DEFAULT: "#000",
                            foreground: "#fff",
                        },
                    },
                },
            },
        }),
    ],
};
export default config;
