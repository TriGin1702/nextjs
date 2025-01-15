import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    // Quét tất cả các file .tsx trong thư mục src/pages
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // Quét tất cả các file CSS hoặc SCSS trong thư mục src/styles (nếu có)
    "./src/styles/**/*.{css,scss}",
    "./src/styles/*.{css,scss}",
    // Or if using `src` directory:
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/pages/**/*.{js,ts,jsx,tsx}",
//     "./src/pages/*.{js,ts,jsx,tsx}",
//     // Quét các file .tsx trong thư mục src/components (nếu có)
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//     "./src/components/*.{js,ts,jsx,tsx}",
//     "./src/layout/**/*.{js,ts,jsx,tsx}",
//     "./src/layout/*.{js,ts,jsx,tsx}",
//     "./src/hooks/**/*.{js,ts,jsx,tsx}",
//     "./src/hooks/*.{js,ts,jsx,tsx}",
//     "./src/context/**/*.{js,ts,jsx,tsx}",
//     "./src/context/*.{js,ts,jsx,tsx}",
//     "./src/**/*.{html,js}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
