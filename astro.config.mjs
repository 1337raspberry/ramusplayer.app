import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://ramusplayer.app",
  devToolbar: { enabled: false },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Bricolage Grotesque",
      cssVariable: "--font-display",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/BricolageGrotesque-Variable.woff2"],
            weight: "200 800",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-body",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Inter-Variable.woff2"],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      fallbacks: ["ui-monospace", "monospace"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/JetBrainsMono-Variable.woff2"],
            weight: "100 800",
            style: "normal",
          },
        ],
      },
    },
  ],
});
