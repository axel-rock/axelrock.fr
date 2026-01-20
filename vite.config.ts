import contentCollections from "@content-collections/vite"
import devtoolsJson from "vite-plugin-devtools-json"
import tailwindcss from "@tailwindcss/vite"
import { wuchale } from "@wuchale/vite-plugin"
import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [wuchale(), tailwindcss(), sveltekit(), contentCollections(), devtoolsJson()],
})
