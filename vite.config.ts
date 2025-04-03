import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import react, { Options } from "@vitejs/plugin-react";
import { lingui } from "@lingui/vite-plugin";
import path from "path";

const REACT_PLUGIN_CONFIG: Options = {
  babel: {
    plugins: ["macros"],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(REACT_PLUGIN_CONFIG), tsconfigPaths(), dts(), lingui()],
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "src/styles"),
      "@providers": path.resolve(__dirname, "src/providers"),
    },
  },
});
