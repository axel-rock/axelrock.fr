import type { LayoutServerLoad } from "./$types"

// Expose the negotiated locale (set in hooks.server.ts) so pages can
// format dates with the same locale on server and client.
export const load: LayoutServerLoad = ({ locals }) => ({ lang: locals.lang })
