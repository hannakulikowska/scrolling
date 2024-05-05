import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  let base = "/";

  if (mode === "production") {
    // For GitHub Pages
    base = "/scrolling/";
  } else if (mode === "wordpress") {
    // For WordPress
    base = "/wp-content/themes/scrolling/";
  }

  return {
    base,
  };
});
