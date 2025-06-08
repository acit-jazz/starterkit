const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
    './resources/themes/**/*.{css,pcss,scss}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Halcom', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#E0A75E',
        'secondary': '#49C4F0',
        'dark': '#020300',
        'darkblue' : '#79A9D1',
        'darkgray': '#59544B',
        'lightgray': '#7D8CA3',
        'grey':'rgba(6,57,64,0.6',
        'army':'#779945',
        'lightyellow':'#FEF9D1',
        'tr' : 'rgba(5, 57, 109, 0.2)'
      },
      safelist: [
        // bg colors
        'bg-white',
        'bg-black',
        'bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-gray-600', 'bg-gray-700', 'bg-gray-800', 'bg-gray-900',
        'bg-red-500', 'bg-red-600', 'bg-red-700',
        'bg-orange-400', 'bg-orange-500', 'bg-orange-600',
        'bg-amber-300', 'bg-amber-400', 'bg-amber-500',
        'bg-yellow-300', 'bg-yellow-400', 'bg-yellow-500',
        'bg-lime-400', 'bg-lime-500',
        'bg-green-400', 'bg-green-500', 'bg-green-600',
        'bg-emerald-400', 'bg-emerald-500', 'bg-emerald-600',
        'bg-teal-400', 'bg-teal-500',
        'bg-cyan-400', 'bg-cyan-500',
        'bg-blue-400', 'bg-blue-500', 'bg-blue-600',
        'bg-indigo-400', 'bg-indigo-500', 'bg-indigo-600',
        'bg-violet-400', 'bg-violet-500', 'bg-violet-600',
        'bg-purple-400', 'bg-purple-500', 'bg-purple-600',
        'bg-fuchsia-400', 'bg-fuchsia-500',
        'bg-pink-400', 'bg-pink-500',
        'bg-rose-400', 'bg-rose-500',
        'bg-slate-500', 'bg-zinc-500', 'bg-neutral-500', 'bg-stone-500',

        // text colors
        'text-white',
        'text-black',
        'text-gray-100', 'text-gray-200', 'text-gray-300', 'text-gray-400', 'text-gray-500', 'text-gray-600', 'text-gray-700', 'text-gray-800', 'text-gray-900',
        'text-red-500', 'text-red-600', 'text-red-700',
        'text-orange-400', 'text-orange-500', 'text-orange-600',
        'text-amber-300', 'text-amber-400', 'text-amber-500',
        'text-yellow-300', 'text-yellow-400', 'text-yellow-500',
        'text-lime-400', 'text-lime-500',
        'text-green-400', 'text-green-500', 'text-green-600',
        'text-emerald-400', 'text-emerald-500', 'text-emerald-600',
        'text-teal-400', 'text-teal-500',
        'text-cyan-400', 'text-cyan-500',
        'text-blue-400', 'text-blue-500', 'text-blue-600',
        'text-indigo-400', 'text-indigo-500', 'text-indigo-600',
        'text-violet-400', 'text-violet-500', 'text-violet-600',
        'text-purple-400', 'text-purple-500', 'text-purple-600',
        'text-fuchsia-400', 'text-fuchsia-500',
        'text-pink-400', 'text-pink-500',
        'text-rose-400', 'text-rose-500',
        'text-slate-500', 'text-zinc-500', 'text-neutral-500', 'text-stone-500',
      ],
      boxShadow: {
        'dark': '0 0 15px rgba(0, 0, 0, 0.9)',
      },
      keyframes: {
        radar: {
          '0%, 100%': {opacity:0.8, transform: 'scale(0.9)' },
          '50%': { opacity:1,transform: 'scale(1.1)' },
        }
      },
      animation: {
        radar: 'radar 1s ease-in-out infinite',
      }
    },
    screens: defaultTheme.screens, // pakai default screens biar sm, md, lg aktif
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
