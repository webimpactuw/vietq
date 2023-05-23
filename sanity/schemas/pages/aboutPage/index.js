export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "headerSection",
      title: "About Header Section",
      type: "aboutHeaderSection",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: "aboutSection",
      title: "More Information Section",
      type: "aboutSection",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: "news",
      title: "News",
      type: "array",
      of: [{ type: "aboutNewsCard" }],
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
