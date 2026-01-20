import type { Handle } from "@sveltejs/kit"
import { loadLocales, runWithLocale } from "wuchale/load-utils/server"

import { locales } from "./locales/data.js"
import * as main from "./locales/main.loader.server.svelte.js"

// Load translations at server startup
loadLocales(main.key, main.loadIDs, main.loadCatalog, locales)

const handlei18n: Handle = async ({ event, resolve }) => {
  const { lang } = getLocaleFromHeaders(event.request.headers)
  event.locals.lang = lang
  return runWithLocale(lang, () =>
    resolve(event, {
      transformPageChunk: ({ html }) => html.replace("%lang%", lang),
    }),
  )
}

export const handle: Handle = handlei18n

function getLocaleFromHeaders(headers: Headers): { lang: string } {
  const acceptLanguage = headers.get("accept-language")
  if (!acceptLanguage) return { lang: locales[0]! }
  for (const entry of acceptLanguage.split(",")) {
    const locale = entry.split(";")[0]!.trim()
    if (locales.includes(locale)) return { lang: locale }
    const short = locale.split("-")[0]!
    if (locales.includes(short)) return { lang: short }
  }
  return { lang: locales[0]! }
}
