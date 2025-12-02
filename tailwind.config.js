// tailwind.config.js
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Aliasing old primary-blue to new standard
                'primary-blue': '#2563EB', // blue-600
                'accent-orange': '#3B82F6', // Replaced with blue-500 for consistency
                'light-gray': '#9CA3AF', // gray-400
                'dark-text': '#1E3A8A', // blue-900
                'body-text': '#374151', // gray-700

                // Custom Gradients
                'custom-cyan': '#4FACFE',
                'custom-bright-cyan': '#00F2FE',
                'custom-bright-blue': '#0078FF',
                'custom-sky': '#00C6FF',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                header: ['Poppins', 'Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}