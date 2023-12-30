/** @type {import('tailwindcss').Config} */
const { tailwindcssPaletteGenerator } = require("@bobthered/tailwindcss-palette-generator");

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        colors: {
            ...tailwindcssPaletteGenerator({
                colors: ['#303a4c', '#dcdfe1', '#cbc1a3', '#a69674', '#d97171', '#333333'],
                names: ['naval', 'icicle', 'ramie', 'roycroft', 'action', 'grey']
            }),
            white: '#ffffff',
            black: '#000000',
            transparent: 'transparent',
        },
        extend: {
            fontFamily: {
                'sans': 'Nunito Sans, sans-serif',
                'mont': 'Montserrat, sans-serif'
            },
            dropShadow: {
                'lg-dark': '0px 25px 20px rgb(0 0 0 / 0.45)'
            },
            spacing: {
                'vw-limit': '60rem',
                'vw-max': '110rem'
            },
            cursor: {
                'paintbrush': 'url(\'/src/lib/icons/iconmonstr-paintbrush-3.svg\'), pointer'
            }
        },
    },
    plugins: [
        require('tailwindcss-fluid-type')
    ],
}

