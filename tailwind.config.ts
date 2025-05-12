import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{html,ts,tsx,js,jsx}', 
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1E40AF', 
                secondary: '#9333EA',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], 
            },
        },
    },
    plugins: [],
};

export default config;