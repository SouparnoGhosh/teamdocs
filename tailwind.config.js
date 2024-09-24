export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "card": "14rem",
      },
      aspectRatio: {
        "card": "210 / 257",
      },
      borderRadius: {
        box: "0.375rem", // This is the same as Tailwind's default 'md'
        pill: "50rem", // This creates a fully rounded shape, suitable for pill-like elements
      },
      colors: {
        background: "hsl(0, 0%, 90%)", // Light gray
        foreground: "hsl(0, 0%, 12%)", // Very dark gray
        card: {
          DEFAULT: "hsl(0, 0%, 100%)", // White
          foreground: "hsl(0, 0%, 15%)", // Dark gray
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 90%)", // Light gray, similar to --background
          foreground: "hsl(0, 0%, 20%)", // Dark gray, slightly lighter than --foreground
        },
        primary: {
          DEFAULT: "hsl(0, 0%, 0%)", // Black
          foreground: "hsl(0, 0%, 100%)", // White
        },
        // Assuming secondary and destructive colors were placeholders and not updated
        muted: {
          DEFAULT: "hsl(0, 0%, 30%)", // Dark gray, for less emphasized elements
          foreground: "hsl(0, 0%, 40%)", // Medium dark gray, for text on muted backgrounds
        },
        accent: {
          DEFAULT: "hsl(0, 0%, 50%)", // Medium gray, for standout elements
          foreground: "hsl(0, 0%, 10%)", // Very dark gray, darker than --foreground
        },
        border: "hsl(0, 0%, 75%)", // Light medium gray, for borders
        input: "hsl(0, 0%, 95%)", // Very light gray, for input fields
        ring: "hsl(0, 0%, 85%)", // Light gray, for focus rings
        // Assuming chart colors are placeholders and not updated
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
