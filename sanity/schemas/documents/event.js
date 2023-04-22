export default {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "dateRange",
      title: "Date Range",
      description:
        "The date range of the event. For events on a single day, use the same date for both start and end.",
      type: "dateRange",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "The unique identifier for the event. Make sure there's a date selected for the event before generating a slug.",
      options: {
        source: (doc) =>
          `${doc.title}-${
            new Date(doc.dateRange.start).toISOString().split("T")[0]
          }`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().max(100),
      rows: 3,
    },
    {
      name: "location",
      title: "Location",
      type: "location",
      validation: (Rule) => Rule.required(),
    },
  ],
  orderings: [
    {
      name: "dateAsc",
      title: "Date Ascending",
      by: [
        {
          field: "dateRange.start",
          direction: "asc",
        },
      ],
    },
    {
      name: "dateDesc",
      title: "Date Descending",
      by: [
        {
          field: "dateRange.start",
          direction: "desc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "dateRange.start",
      media: "image",
    },
    prepare({ title, date, media }) {
      return {
        title,
        subtitle: new Date(date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        media,
      };
    },
  },
};
