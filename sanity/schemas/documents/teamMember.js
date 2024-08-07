import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export default {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "teamMember" }),
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "pronouns",
      title: "Pronouns",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
    },
    {
      name: "previous",
      title: "Previous",
      type: "boolean",
      description: "Check this box if the team member is no longer active",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
};
