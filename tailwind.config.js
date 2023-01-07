module.exports = {
    content: ["./templates/**/*.html", "./themes/**/*.html", "./themes/**/*.html"],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
