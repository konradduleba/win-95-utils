import { defineConfig } from "tsup";
import { sassPlugin } from "@jgoz/esbuild-plugin-sass";
import path from "path";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  sourcemap: true,
  esbuildPlugins: [
    sassPlugin({
      alias: {
        "@styles": path.resolve(__dirname, "src/styles"),
      },
    }),
  ],
  tsconfig: "./tsconfig.build.json",
});
