import posts from "./_posts.js";

const latest = JSON.stringify(posts[0]);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(latest);
}
