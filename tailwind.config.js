/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: '#EFECE8',
                yellow: {
                    button: '#f7ba27'
                }
            }
        },
    },
    plugins: [],
}