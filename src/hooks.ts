import type { Reroute } from "@sveltejs/kit"

// No rerouting needed for now - simple setup
export const reroute: Reroute = ({ url }) => url.pathname
