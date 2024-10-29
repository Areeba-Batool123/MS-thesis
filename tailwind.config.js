/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
     "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {  
      colors: {
        primary: 'hsl(210, 60%, 45%)',            // A calm and professional blue
        primaryLight: 'hsl(210, 60%, 65%)',       // Lighter version of the primary blue
        secondary: 'hsl(150, 40%, 50%)',          // A gentle, balancing green (for the Get Started button)
        accent: 'hsl(40, 90%, 60%)',              // A warm, golden accent for highlights
        darkGray: 'hsl(0, 0%, 40%)',              // A neutral, dark gray
        lightGray: 'hsl(0, 0%, 90%)',             // A very light gray for background use
        offWhite: 'hsl(0, 0%, 98%)',              // Subtle off-white for soft backgrounds
        errorRed: 'hsl(0, 80%, 60%)',             // Red for error messages or highlights
        successGreen: 'hsl(120, 60%, 50%)',       // Green for success messages (e.g., Get Started button)
        hoverBlue: 'hsl(210, 60%, 55%)',          // Slightly darker blue for hover effects on buttons
        loginDarkBlue: 'hsl(210, 50%, 55%)', 
        DarkBlue: 'hsl(210, 50%, 45%)', 
           // Dark blue for the login button background
        loginHoverBlue: 'hsl(210, 60%, 65%)',     // Lighter blue for hover state on the login button
        lightGrayishBlue: 'hsl(210, 60%, 70%)',   // For text and link hover states
        bluish:'hsl(248.5, 54.1%, 35.9%)',
        white: 'hsl(0, 0%, 100%)',                // Pure white for text or contrast purposes
      }
      },
  },
   
 
  plugins: [],
}

