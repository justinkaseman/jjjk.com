import posts from "./_posts.js";

const contents = JSON.stringify(
  posts.map((post) => {
    return {
      slug: post.slug,
      title: post.title,
      country: post.country,
      lat: post.lat,
      lng: post.lng,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
