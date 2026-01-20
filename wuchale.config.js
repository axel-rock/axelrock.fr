// @ts-check
import { adapter as svelte } from "@wuchale/svelte"
import { defineConfig } from "wuchale"

export default defineConfig({
  locales: ["en", "fr"],
  adapters: {
    main: svelte({ loader: "sveltekit" }),
  },
})
