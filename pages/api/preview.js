export default function preview(req, res) {
  const { slug } = req.query;

  res.setPreviewData({});
  // if (query.slug === "about") {
  //   res.writeHead(307, { Location: "/about" });
  // } else {
  //   res.writeHead(307, { Location: "/" });
  // }
  switch (slug) {
    case "about":
      res.writeHead(307, { Location: "/about" });
      break;
    default:
      res.writeHead(307, { Location: "/" });
  }
  res.end();
}
