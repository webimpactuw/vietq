export default {
  name: "homeAboutSection",
  title: "Home About Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title shown in About section, display under hero banner.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      description: "Provide description for the 'About' section here.",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      description: "Add image to show in the about section.",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
