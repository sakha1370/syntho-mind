/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        // "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            transitionDelay: {
                '600': '600ms',
                '900': '900ms',
                '1200': '1200ms',
                '1500': '1500ms',
                '1800': '1800ms',
                '2100': '2100ms',
            },
            fontFamily: {
                sans: ['var(--font-Roboto)'],
            },
            keyframes: {
                customsSlideInDown: {
                    '0%': {transform: 'translate3d(0,-100%,0)', visibility: 'visible'},
                    '100%': {transform: 'translateZ(0)'},
                },
                customsSlideInUp: {
                    '0%': {transform: 'translate3d(0,100%,0)', visibility: 'visible'},
                    '100%': {transform: 'translateZ(0)'},
                },
                customsSlideInLeft: {
                    '0%': {transform: 'translate3d(100%,0,0)', },
                    '100%': {transform: 'translateZ(0)'},
                }
            },
            animation: {
                slideInDown: 'customsSlideInDown 1s ease-out',
                slideInUp: 'customsSlideInUp 1s ease-out',
                slideInLeft: 'customsSlideInLeft 1s ease-out',
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'white': '#FFFFFF',
                'deep-blue': '#003366',
                'rich-green': '#008080',
                'warm-gray': '#666666',
                'silver': '#ecebff',
                'gold': '#FFD700',
            },
        },
    },
    plugins: [
        require('tailwindcss-animated'),
        ],
}