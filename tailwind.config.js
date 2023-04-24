/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#c3cd2d",
        
"secondary": "#F000B8",
        
"accent": "#37CDBE",
        
"neutral": "#3D4451",
        
"base-100": "#FFFFFF",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",

        },
      },
    ],
  },
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
 
  plugins: [require("daisyui","@tailwindcss/forms")],
  
}

