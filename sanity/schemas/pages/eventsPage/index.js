export default {
  name: "eventsPage",
  title: "Events Page",
  type: "document",
  fields: [
    {
      name: "headerSection",
      title: "Events Header Section",
      type: "eventsHeaderSection",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: "eventTypes",
      title: "Types of Events",
      type: "array",
      of: [{ type: "eventsTypeCard" }],
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
        title: "Events",
      };
    },
  },
};
