export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "hero",
      title: "Hero",
      type: "homeHero",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
    },
    {
      name: "about",
      title: "About Section",
      type: "homeAboutSection",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
    },
    {
      name: "photoWall",
      title: "Photo Wall",
      type: "homePhotoWall",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
    },
    {
      name: "bigQuote",
      title: "Big Quote",
      type: "homeBigQuote",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
    },
    {
      name: "events",
      title: "Events Section",
      type: "homeEventsSection",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
    },
    {
      name: "community",
      title: "Community Section",
      type: "homeCommunitySection",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare() {
      return {
        title: "Home",
      };
    },
  },
};
