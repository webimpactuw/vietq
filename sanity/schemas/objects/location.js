export default {
  name: "location",
  title: "Location",
  type: "object",
  fields: [
    {
      name: "virtual",
      title: "Virtual",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "geopoint",
      title: "Geopoint",
      type: "geopoint",
      hidden: ({ parent }) => parent?.virtual,
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      hidden: ({ parent }) => parent?.virtual,
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      hidden: ({ parent }) => parent?.virtual,
    },
    {
      name: "link",
      title: "Link",
      type: "link",
      hidden: ({ parent }) => !parent?.virtual,
    },
  ],
};
