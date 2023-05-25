export default {
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Resource Title",
      description: "The Resource's title, shown in the resource section.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Resource Description",
      description: "Description provide information on what the resource is.",
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
      description: "The resource's link is insert here.",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Resource Image",
      description: "The resource's image is insert here.",
      type: "image",
      //   validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Resource Tags",
      description: "Add resource's type here.",
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
