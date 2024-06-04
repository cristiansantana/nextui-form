import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

/** @internal */
const config: Config = {
    content: [
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
    },
    darkMode: "class",
    plugins: [nextui()],
};

/** @internal */
export default config;
