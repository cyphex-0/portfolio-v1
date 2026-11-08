import { defineConfig } from "eslint/config";
import next from "eslint-config-next";

export default defineConfig([
  // 1. Global Ignores
  {
    ignores: [
      ".agents/**",
      "skill_use/**",
      ".next/**",
      "node_modules/**",
      "dist/**",
      "build/**"
    ],
  },

  // 2. Base Next.js configuration
  ...next,

  // 3. Architectural Boundary Rules for src/
  {
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            // Rule A: Shared UI primitives cannot import feature code
            {
              group: ["@/features/**", "../features/**", "../../features/**"],
              message: "Shared UI components cannot import feature-specific code. Keep UI primitives domain-agnostic."
            },
            // Rule B: Features cannot import private internals of other features
            {
              group: [
                "@/features/*/**",
                "!@/features/*",
                "../../*/components/**",
                "../../*/hooks/**",
                "../../*/data/**"
              ],
              message: "Cross-feature imports must use the public feature entrypoint (@/features/<feature>)."
            }
          ]
        }
      ]
    }
  },

  // 4. Strict isolation for Data, Config, and Types
  {
    files: ["src/**/data/**/*.ts", "src/config/**/*.ts", "src/types/**/*.ts"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react",
              message: "Data models, config, and type definitions cannot import React."
            },
            {
              name: "motion/react",
              message: "Data models cannot import animation libraries."
            }
          ],
          patterns: [
            // Rule C: Models & Config cannot import React or UI components
            {
              group: [
                "@/components/**",
                "../components/**",
                "../../components/**",
                "@/features/**/components/**"
              ],
              message: "Data models and configuration must be pure TypeScript modules and cannot import UI components."
            }
          ]
        }
      ]
    }
  }
]);
