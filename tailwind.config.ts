import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(45deg, hsla(11, 82%, 87%, 1) 0%, hsla(299, 85%, 90%, 1) 100%)",
      },
      colors: {
        customBGPink: "#F7CAC9",
        customBlack: "#2E2A2A",
        customBrown: "#8B5E65",
        customOffWhite: "#F6F4EB",
      },
      animation: {
        gradient: "gradient 10s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
