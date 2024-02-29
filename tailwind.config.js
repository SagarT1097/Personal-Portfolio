/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                'sm': '640px',      // Custom small screen (e.g., portrait tablet)
                'md': '768px',      // Custom medium screen (e.g., laptop)
                'lg': '1024px',     // Custom large screen (e.g., landscape tablet)
                'xl': '1280px',     // Custom extra-large screen (e.g., desktop monitor)
            },
},
    },
    plugins: [require('tailwind-scrollbar')],
}