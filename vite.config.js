import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
const resolve = (dir) => path.join(__dirname, dir)


// https://vitejs.dev/config/
export default defineConfig({
  publicPath: "./",
  alias: {
    "@": path.resolve(__dirname, "src"),
    "comp": resolve('src/components'),
  },
  plugins: [vue()],
});
