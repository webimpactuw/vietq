import { possibleColors } from "@/utils/colors";

export default {
  name: "resourceTag",
  title: "Resource Tag",
 description: "Add your resource type.",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "The title of the resource's type.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      description: "the unique identifier for the resource.",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "color",
      title: "Color",
      description: "Add color to the resource's tag.",
      type: "color",
      validation: (Rule) => Rule.required(),
      options: {
        disableAlpha: true,
        colorList: possibleColors,
      },
    },
  ],
  options: {
    columns: 2,
  },
};
