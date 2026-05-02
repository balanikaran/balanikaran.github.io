import { defineConfig } from "astro/config"
import icon from "astro-icon"

export default defineConfig({
  site: "https://karanbalani.com",
  integrations: [
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
