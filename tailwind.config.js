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
    extend: {
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
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
