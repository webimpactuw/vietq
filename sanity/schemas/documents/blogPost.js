import format from "date-fns/format";
export default {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The unique identifier for the blog post.",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "teamMember" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
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
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  orderings: [
    {
      name: "dateAsc",
      title: "Date (newest first)",
      by: [
        { field: "date", direction: "desc" },
        { field: "title", direction: "asc" },
      ],
    },
    {
      name: "dateDesc",
      title: "Date (oldest first)",
      by: [
        { field: "date", direction: "asc" },
        { field: "title", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      author: "author.name",
      media: "image",
    },
    prepare({ title, date, author, media }) {
      return {
        title,
        subtitle: `${format(new Date(date), "M/dd/yyyy")} by ${author}`,
        media,
      };
    },
  },
};
