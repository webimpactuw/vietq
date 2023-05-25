export default {
  name: "homeEventsSection",
  title: "Home Events Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the event section, display under the quote section.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      description: "A brief description of the event for reader to understand what you're display.",
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
