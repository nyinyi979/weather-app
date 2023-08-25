/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}' , './src/components/**/*.{jsx,js}', './public/**/*.html'],
  theme: {
    extend: {
      keyframes : {
        fade_half :{
          '0% 100%' : { opacity : 1 } ,
          '50%' : { opacity : 0.5 } ,
        },
        fade : {
          '0%' : { opacity : 0 } , 
          '100%' : { opacity : 1 }
        },
        slide_in :{
          '0%' : { marginLeft : '-40px' , opacity : 0} ,
          '50%' : { opacity : 0.5 } , 
          '100%' : { transform : '0px' , opacity : 1}
        }
      },
      animation : {
        fade_half : 'fade_half 1s ease-in-out',
        fade_slow : 'fade 2s ease-in-out' ,
        fade : 'fade 1s ease-in-out' , 
        slide_in_1 : 'slide_in 1s ease-in-out' ,
        slide_in_2 : 'slide_in 2s ease-in-out' ,
        slide_in_3 : 'slide_in 2.5s ease-in-out' ,
        slide_in_4 : 'slide_in 3s ease-in-out' ,
        slide_in_5 : 'slide_in 3.5s ease-in-out' ,
      }
    },
  },
  daisyui : {
    themes : ["business" , "retro" , "coffee"]
  },
  plugins: [require("daisyui")],
}

