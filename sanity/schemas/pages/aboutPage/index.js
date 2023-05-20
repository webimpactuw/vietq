export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "teamPicture",
      title: "Team Picture",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "altText",
          title: "Alternate Text",
          type: "string",
        },
      ],
    },
    {
      name: "aboutSection",
      title: "Section",
      type: "aboutSection",
    },
    {
      name: "cards",
      title: "Cards",
      type: "array",
      of: [{ type: "aboutCard" }],
      validation: (Rule) => Rule.required().length(3),
      options: {
        layout: "grid",
        sortable: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare() {
      return {
        title: "About",
      };
    },
  },
};
