/// <reference types="vitest" />

import path from "node:path";

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        environment: "jsdom",
        setupFiles: path.resolve(__dirname, "./tests/setup.ts"),
    },
});
