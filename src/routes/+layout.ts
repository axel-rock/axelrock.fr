import { browser } from "$app/environment"
import { loadLocale } from "wuchale/load-utils"

import { locales } from "../locales/data.js"
import "../locales/main.loader.svelte.js"

export async function load() {
  if (browser) {
    // Default to first locale on client - server already set the correct one
    const lang = document.documentElement.lang
    if (locales.includes(lang)) {
      await loadLocale(lang)
    }
  }
}
