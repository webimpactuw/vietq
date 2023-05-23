export default {
  name: "homeBigQuote",
  title: "Home Big Quote",
  type: "object",
  fields: [
    {
      name: "quote",
      title: "Quote",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "source",
      title: "Source",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
