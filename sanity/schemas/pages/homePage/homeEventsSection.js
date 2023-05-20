export default {
  name: "homeEventsSection",
  title: "Home Events Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      description: "3 images",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.required().length(3),
      options: {
        sortable: true,
        layout: "grid",
      },
    },
  ],
};
