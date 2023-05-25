export default {
  name: "communityPage",
  title: "Community Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the community page, display in the community banner.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      description: "Provide information of the community here.",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroImage",
      title: "Hero Image",
      description: "Image display as background, similar to the hero banner.",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare() {
      return {
        title: "Community",
      };
    },
  },
};
