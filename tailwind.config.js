/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
  const flattenColorPalette = (colors) => {
    // Helper function to flatten the color palette
    const result = {};
    for (const [key, value] of Object.entries(colors)) {
      if (typeof value === 'object' && value !== null) {
        const flattened = flattenColorPalette(value);
        for (const [nestedKey, nestedValue] of Object.entries(flattened)) {
          result[`${key}-${nestedKey}`] = nestedValue;
        }
      } else {
        result[key] = value;
      }
    }
    return result;
  };

  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
