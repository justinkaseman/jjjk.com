<script context="module">
  import { convertLatLng } from "../utils/location";
  export async function preload({ params, query }) {
    const data = await this.fetch(`map.json`);
    let posts = await data.json();
    posts = posts.map((post) => {
      return { ...post, ...convertLatLng(post.lat, post.lng) };
    });
    return { posts };
  }
</script>

<script>
  export let state;
  export let posts;
</script>

<style>
  img {
    height: 300px;
    width: 700px;
  }
  .map-box {
    position: relative;
    height: 300px;
  }
  .post-dot {
    border-radius: 100%;
    background-color: red;
    position: absolute;
    top: var(--top);
    left: var(--left);
    height: 8px;
    width: 8px;
  }
  .list-box {
    display: none;
  }
  @media only screen and (max-width: 740px) {
    .post-dot {
      display: none;
    }
    .map-box {
      display: none;
    }
    .list-box {
      display: block;
      text-align: center;
    }
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="container">
  <div class="map-box">
    <img src="usa2.svg" alt="Map of the United States of America." />
    {#each posts as post}
      <a rel="prefetch" href={post.slug}>
        <div
          class="post-dot"
          style="--top: {post.top}%; --left: {post.left}%;" />
      </a>
    {/each}
  </div>
  <div class="list-box">
    {#each posts as post, index}
      {#if index}
        <hr />
      {/if}
      <h2><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></h2>
    {/each}
  </div>
</div>
