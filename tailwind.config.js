export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(210, 16%, 93%)", // slate-100
        foreground: "hsl(210, 16%, 20%)", // slate-800
        card: {
          DEFAULT: "hsl(210, 16%, 98%)", // slate-50
          foreground: "hsl(210, 16%, 18%)", // slate-900
        },
        popover: {
          DEFAULT: "hsl(210, 16%, 93%)", // slate-100
          foreground: "hsl(210, 16%, 25%)", // slate-700
        },
        primary: {
          DEFAULT: "hsl(210, 16%, 13%)", // slate-900
          foreground: "hsl(210, 16%, 98%)", // slate-50
        },
        muted: {
          DEFAULT: "hsl(210, 16%, 40%)", // slate-500
          foreground: "hsl(210, 16%, 45%)", // slate-400
        },
        accent: {
          DEFAULT: "hsl(210, 16%, 50%)", // slate-400
          foreground: "hsl(210, 16%, 10%)", // slate-900
        },
        border: "hsl(210, 16%, 75%)", // slate-300
        input: "hsl(210, 16%, 95%)", // slate-200
        ring: "hsl(210, 16%, 85%)", // slate-300
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      spacing: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.375rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "50rem",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        none: "none",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
