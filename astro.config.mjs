import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon"

export default defineConfig({
  site: "https://karanbalani.tech",
  integrations: [
    sitemap(),
    icon({
      svgoOptions: {
        plugins: [
          { name: "preset-default" },
          {
            name: "prefixIds",
            params: {
              prefix: () =>
                Math.round(Math.random() * 1_000_000_000).toString(36),
            },
          },
        ],
      },
    }),
  ],
})
