import type { PageLoad } from "./$types"

// Kept in this .ts file (not the .svelte component) so wuchale does not
// extract the schema strings into the i18n catalogs.
const personJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Axel Rock",
  url: "https://axelrock.fr",
  jobTitle: "CTO",
  worksFor: {
    "@type": "Organization",
    name: "Cobl",
    url: "https://cobl.ai",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nantes",
    addressCountry: "FR",
  },
  sameAs: [
    "https://linkedin.com/in/axelrock",
    "https://github.com/axel-rock",
    "https://twitter.com/axlrck",
  ],
  knowsAbout: ["AI agents", "LLM evals", "autonomous RFP generation", "AI memory systems"],
})

export const load: PageLoad = () => {
  return {
    jsonLdScript: `<script type="application/ld+json">${personJsonLd}</script>`,
    meta: {
      title: "Axel Rock, CTO of Cobl",
      description:
        "Creative developer turned product leader. Building Cobl, teaching AI at ECV Nantes.",
    },
  }
}
