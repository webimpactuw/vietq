export default {
  name: "homePhotoWall",
  title: "Home Photo Wall",
  type: "object",
  fields: [
    {
      name: "images",
      title: "Images",
      description: "Must have at least 18 images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.required().min(18),
      options: {
        sortable: true,
        layout: "grid",
      },
    },
  ],
};
