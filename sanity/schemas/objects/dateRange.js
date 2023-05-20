export default {
  name: "dateRange",
  title: "Date Range",
  type: "object",
  fields: [
    {
      name: "start",
      title: "Start",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "end",
      title: "End",
      type: "date",
    },
  ],
  options: {
    columns: 2,
  },
};
