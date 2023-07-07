/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const withMT = require("@material-tailwind/react/utils/withMT");

// eslint-disable-next-line no-undef
module.exports = withMT({
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        screens: {
            sm: "640px",
            md: "768",
            lg: "1024px",
            xl: "1440px",
        },
        extend: {
            colors: {
                "primary-light": "#F7F8FC",
                "secondary-light": "#FFFFFF",
                "ternary-light": "#f6f7f8",

                "primary-dark": "#0D2438",
                "secondary-dark": "#102D44",
                "ternary-dark": "#1E3851",
            },
            container: {
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "5rem",
                    xl: "6rem",
                    "2xl": "8rem",
                },
            },
        },
    },
    variants: {
        extend: { opacity: ["disabled"] },
    },
    plugins: [],
});
