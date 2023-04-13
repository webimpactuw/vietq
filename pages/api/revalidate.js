import { parseBody } from "next-sanity/webhook";

export { config } from "next-sanity/webhook";

export default async function revalidate(req, res) {
  try {
    const { isValidSignature, body } = await parseBody(
      req,
      process.env.NEXT_PUBLIC_SANITY_WEBHOOK_SECRET
    );

    if (!isValidSignature) {
      const message = "Invalid signature";
      console.warn(message);
      res.status(401).json({ message });
      return;
    }

    const staleRoute = `/${body.slug.current}`;
    await res.revalidate(staleRoute);
    const message = `Updated route: ${staleRoute}`;
    console.log(message);
    return res.status(200).json({ message });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
}
