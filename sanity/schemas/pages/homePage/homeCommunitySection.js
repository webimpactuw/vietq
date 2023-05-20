export default {
  name: "homeCommunitySection",
  title: "Home Community Section",
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
      name: "cards",
      title: "Cards",
      type: "array",
      of: [{ type: "heroCommunityCard" }],
      validation: (Rule) => Rule.required().length(3),
      options: {
        layout: "grid",
        sortable: true,
      },
    },
  ],
};
