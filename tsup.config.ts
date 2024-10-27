import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm", "cjs"],
  sourcemap: true,
  dts: true,
  clean: true,
  entry: {
    snip: "src/snip.ts",
  },
});
