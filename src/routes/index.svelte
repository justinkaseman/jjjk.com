<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`index.json`);
    const data = await res.json();
    if (res.status !== 200) this.error(res.status, data.message);

    // TODO
    // let state;
    // if (data.state) {
    //   const usa = await this.fetch("usa2.svg");
    //   const text = await usa.text();
    //   const paths = text.match(/<g.+?<\/g>/gs);
    //   if (paths && paths.length) {
    //     const test = paths.find((path) => {
    //       return new RegExp(`${data.state}`).test(path);
    //     });
    //     if (test) {
    //       state = test.trim();
    //     }
    //   }
    // }
    return {
      post: data,
      // , state
    };
  }
</script>

<script>
  export let state;
  export let post;
</script>

<style>
  header {
    text-align: center;
  }

  header h1 {
    margin-bottom: 0.7em;
  }

  header p {
    color: #aaa;
    text-transform: uppercase;
    font-family: Rubik, sans-serif;
    font-weight: 600;
  }

  header hr {
    min-width: 100px;
    width: 30%;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<header>
  <p>{post.printDate}</p>
  <h1>{post.title}</h1>
  <hr />
  <!-- TODO -->
  <!-- {#if state}
    <svg
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
      height="1089px"
      width="2000px"
      pretty_print="False"
      style="stroke-linejoin: round; stroke:#000; fill: none;"
      version="1.1"
      viewBox="0 0 0 0"
      id="svg"
      inkscape:version="0.48.4 r9939"
      sodipodi:docname="usa.svg">
      {@html state}
    </svg>
  {/if} -->
</header>
<div class="container">
  <article class="content">
    {@html post.html}
  </article>
</div>
