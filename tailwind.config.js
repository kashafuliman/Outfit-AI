/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        extend: {
            boxShadow: {
                'glow': '0 0 30px rgba(168, 85, 247, 0.6)',
            }
        },
    },
    plugins: [],
}
