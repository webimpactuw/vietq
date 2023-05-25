export default {
  name: "homeEventsCard",
  title: "Home Events Card",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      description: "Add image to display in the Event section.",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      description: "Provide simple title/description of the photo.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
