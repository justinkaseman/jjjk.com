# JJJK

https://jjjk.us

A blog site for Justin Kaseman & Julie Jonak's travel.

## ✨ Getting started

```bash
git clone https://github.com/justinkaseman/jjjk.com.git
cd jjjk.com
yarn install
yarn run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.

## 🏗 Structure

The base structure of this template is the same as Sapper's [default template](https://github.com/sveltejs/sapper-template/). These are some of the new things you'll find here:

### src/routes

This is the home of your blog. The most important files in here are:

- `_posts.js`: this module contains the logic for loading and parsing your markdown posts.
- `[slug].svelte`: this is the template of your blog post page.
- `index.svelte`: this is the template of your article list page.

### src/routes/posts

This is where your markdown posts live in. All `.md` files in this directory are treated as blog posts and parsed automatically by the `_posts.js` module.

- The markdown file name becomes the post slug. For example `hello-world.md` becomes `http://localhost:3000/blog/hello-world`.
- Everything between the start of the post and the `<!-- more -->` tag becomes the article's "excerpt".
- Frontmatter properties supported are `title` and `date`.

## 📄 Adding a new post

1. Add pictures to the `static` folder
2. Create a new file in `src/routes/posts`
3. See [markdown-test.md](markdown-test.md) as an example
4. Commit the added files and create a new Pull Request on Github
