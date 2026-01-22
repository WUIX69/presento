import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";
import { pluginTailwindCSS } from "rsbuild-plugin-tailwindcss";

import { tanstackRouter } from "@tanstack/router-plugin/rspack";
import { createRequire } from "node:module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [
    pluginQRCode({
      schema(url) {
        // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=true`;
      },
    }),
    pluginReactLynx(),
    pluginTailwindCSS({
      config: "./tailwind.config.ts",
    }),
    pluginTypeCheck(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      react$: require.resolve("@lynx-js/react/compat"),
    },
  },
  tools: {
    rspack: {
      plugins: [
        tanstackRouter({
          target: "react",
        }),
      ],
    },
  },
});
