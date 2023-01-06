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
                },
                gray: {
                    dark: '#333333'
                }
            },
            fontFamily: {
                enchantedLand: ["Enchanted Land", "Gothic"],
                montserrat: ["Montserrat", "Sans Serif"]
            },
            keyframes: {
                rotateZ: {
                    '0%': {
                        transform: 'rotateY(0deg)'
                    },
                    '100%': {
                        transform: 'rotateY(360deg)'
                    }
                }
            },
            animation: {
                rotateZ: 'rotateZ 1s ease-in-out infinite'
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
        require('tailwind-scrollbar')
    ],
}