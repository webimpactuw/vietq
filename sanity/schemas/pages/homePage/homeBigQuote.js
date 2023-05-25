export default {
  name: "homeBigQuote",
  title: "Home Big Quote",
  type: "object",
  fields: [
    {
      name: "quote",
      title: "Quote",
      description: "Quote shown under photo wall, Please add a quote.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "source",
      title: "Source",
      description: "Provide the source where the quote from.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      description: "Upload link of the source, where others can click on the image and access the relative information.",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      description: "Insert image of where the quote's from, or the source's from.",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
