export default {
  name: "homeEventsCard",
  title: "Home Events Card",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
