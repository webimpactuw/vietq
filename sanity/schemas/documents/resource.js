export default {
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Resource Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Resource Description",
      type: "text",
      //   validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The unique identifier for the resource.",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Resource Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Resource Image",
      type: "image",
      //   validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Resource Tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "resourceTag" }],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
};
