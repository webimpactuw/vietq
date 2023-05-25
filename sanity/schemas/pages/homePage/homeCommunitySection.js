export default {
  name: "homeCommunitySection",
  title: "Home Community Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "The title of the community section, display under the Event section.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      description: "Provide information of the community in description here.",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "cards",
      title: "Cards",
      description: "Add Cards in community section here.",
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
