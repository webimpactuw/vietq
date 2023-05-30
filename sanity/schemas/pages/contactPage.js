export default {
  name: "contactPage",
  title: "Contaxt Page",
  type: "document",
  fields: [
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
        title: "Contact",
      };
    },
  },
};
