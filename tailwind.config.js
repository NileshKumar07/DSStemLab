/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                silver: '#Dbe1e8',
                navy: '#050A18',
                accent: {
                    blue: '#7096D1',
                }
            },
            fontFamily: {
                display: ['Oswald', 'sans-serif'],
                body: ['Space Mono', 'monospace'],
            },
            backgroundImage: {
                // We will add the noise texture later
            }
        },
    },
    plugins: [],
}
