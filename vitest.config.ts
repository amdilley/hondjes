import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: "./vitest.setupFiles.ts",

    environment: "jsdom",

    environmentOptions: {
      jsdom: {
        // https://github.com/vitest-dev/vitest/blob/v1.0.0-beta.3/packages/vitest/src/types/jsdom-options.ts#L26
        // https://github.com/vitest-dev/vitest/blob/v1.0.0-beta.3/packages/vitest/src/integrations/env/jsdom.ts#L42
        url: "http://test-runner",
      },
    },

    testTimeout: 5000,

    // https://github.com/jestjs/jest/issues/4386#issuecomment-586028628
    sequence: { shuffle: true },

    passWithNoTests: true,

    coverage: {
      reporter: ["lcov", "html", "text"],

      // We don't want to generate coverage report when one or more tests fail because:
      // - it makes the failure hard to retrieve in the logs
      //   - you have to scroll up a lot to pass the coverage report to see the error
      // - the coverage report numbers are partially wrong because some tests didn't finish
      reportOnFailure: false,

      exclude: [
        "**/*.config.[jt]s",
        "**/*.setupFiles.ts",
        "**/types.ts",
        "lib/types/*.ts",
      ],

      thresholds: {
        statements: 90,
        branches: 90,
        functions: 90,
        lines: 90,
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./lib"),
    },
  },
});
