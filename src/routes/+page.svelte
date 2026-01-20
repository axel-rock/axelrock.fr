<main>
  <section class="hero">
    <h1>Axel Rock</h1>
    <h2>Head of AI & Product</h2>
    <p class="location">Nantes, France</p>
  </section>

  <section class="current">
    <h3>Currently</h3>
    <p>
      Building <a href="https://cobl.ai">Cobl</a> — AI-powered document generation with flexible guardrails.
    </p>
  </section>

  <section class="teaching">
    <h3>Teaching</h3>
    <p>IA Stratégie et Pratique @ ECV Nantes</p>
    <p class="muted">Master's program, 2nd year</p>
  </section>

  <section class="past">
    <h3>Previously</h3>
    <p>Creative developer at Bannerboy, building animated ads for major brands.</p>
    <div class="brands">
      <span>Airbnb</span>
      <span>Spotify</span>
      <span>Google</span>
      <span>Netflix</span>
      <span>Amazon</span>
    </div>
  </section>

  <section class="contact">
    <h3>Contact</h3>
    <nav>
      <a href="https://twitter.com/axlrck">Twitter</a>
      <a href="https://linkedin.com/in/axelrock">LinkedIn</a>
      <a href="https://github.com/axel-rock">GitHub</a>
    </nav>
  </section>
</main>

<style>
  main {
    max-width: 48rem;
    margin-inline: auto;
    padding: 2rem 1rem;
  }

  section {
    margin-block: 3rem;
  }

  .hero {
    text-align: center;
    margin-block: 6rem;
  }

  .location {
    margin-top: 2rem;
    color: light-dark(#78786f, #a0a0a0);
    font-size: 1em;
    letter-spacing: 0.02em;
  }

  /* LOCKED TYPOGRAPHY - DO NOT CHANGE weights/letter-spacing */
  h1 {
    font-weight: 450;
    letter-spacing: 0.01em;
    font-style: normal;
    font-size: clamp(3rem, 8vw, 6rem);
    line-height: 1;
    margin-bottom: 0.1em;
  }

  h2 {
    font-family: var(--font-serif);
    font-weight: 350;
    font-style: italic;
    font-size: clamp(1.25rem, 3vw, 2rem);
    -webkit-font-smoothing: initial;
    -moz-osx-font-smoothing: unset;
  }
  /* END LOCKED TYPOGRAPHY */

  h3 {
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: light-dark(#78786f, #a0a0a0);
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    line-height: 1.6;
  }

  .current {
    a {
      color: var(--accent);
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  .muted {
    color: light-dark(#78786f, #a0a0a0);
    font-size: 1em;
  }

  .brands {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
    margin-top: 0.5rem;
    color: light-dark(#78786f, #a0a0a0);
    font-size: 1em;
  }

  .contact nav {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
</style>
