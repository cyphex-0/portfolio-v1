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

  // 3a. Rule A: Shared components cannot import feature code
  {
    files: ["src/components/**/*.{ts,tsx}", "src/hooks/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/features/**", "../features/**", "../../features/**"],
              message: "Shared UI components and shared hooks cannot import feature-specific code. Keep UI primitives domain-agnostic."
            }
          ]
        }
      ]
    }
  },

  // 3b. Rule B: Features cannot import private internals of other features
  {
    files: ["src/features/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
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

  // 4. Rule C: Strict isolation for Data, Config, and Types
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
