import { possibleColors } from "@/utils/colors";

export default {
  name: "resourceTag",
  title: "Resource Tag",
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
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "color",
      title: "Color",
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
