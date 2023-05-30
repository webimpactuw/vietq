import Bar from "../../Bar";

export default function EventBar({ data }) {
  const url = `${process.env.NEXT_PUBLIC_HOST}/community/post/${data.slug}`;
  const text = `Check out this event from VietQ: ${data.title}`;

  return (
    <Bar
      url={url}
      text={text}
      back={{ href: "/events", text: "Back to Events" }}
    />
  );
}
