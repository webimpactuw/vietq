import { routes } from "@/sanity/lib/routes";

export default function preview(req, res) {
  const { slug } = req.query;

  res.setPreviewData({});

  const route = routes.filter((route) => route.slug === slug);

  if (route.length > 0) {
    res.writeHead(307, { Location: route[0].location });
  } else {
    res.writeHead(307, { Location: "/" });
  }

  res.end();
}
