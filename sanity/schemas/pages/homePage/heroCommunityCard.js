export default {
  name: "heroCommunityCard",
  title: "Hero Community Card",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "The title of a single card show in community section.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      description: "The description of a single card show in community section.",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
};
