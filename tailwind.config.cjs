/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}'
  ],
  safelist: [
    'text-gray-700', 'text-gray-900', 'text-yellow-900', 'text-purple-900', 'text-red-900', 'text-cyan-900',
    'bg-yellow-50', 'bg-purple-50', 'bg-red-50', 'bg-cyan-50', 'bg-white',
    'border-yellow-500', 'border-purple-500', 'border-red-500', 'border-cyan-500',
    'font-semibold', 'font-bold', 'text-lg', 'text-xl', 'text-3xl', 'text-4xl'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
