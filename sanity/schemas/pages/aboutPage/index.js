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
