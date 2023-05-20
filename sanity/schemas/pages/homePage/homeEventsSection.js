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
      name: "pictures",
      title: "Pictures",
      type: "array",
      description: "3 pictures",
      of: [{ type: "homeEventsCard" }],
      validation: (Rule) => Rule.required().length(3),
      options: {
        sortable: true,
        layout: "grid",
      },
    },
  ],
};
