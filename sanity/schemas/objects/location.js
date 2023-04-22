export default {
  name: "location",
  title: "Location",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "geopoint",
      title: "Geopoint",
      type: "geopoint",
    },
  ],
};
