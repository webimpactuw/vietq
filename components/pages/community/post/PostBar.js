import Bar from "../../Bar";

export default function PostBar({ data }) {
  const url = `${process.env.NEXT_PUBLIC_HOST}/community/post/${data.slug}`;
  const text = `Check out this blog post from VietQ: ${data.title}`;

  return (
    <Bar
      url={url}
      text={text}
      back={{ href: "/community", text: "Back to Community" }}
    />
  );
}
