export default {
  name: "homeHero",
  title: "Home Hero",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title shown on the hero banner.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      description: "Description shown on the hero banner.",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroImage",
      title: "Background Image",
      description: "This background display on the hero banner.",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
