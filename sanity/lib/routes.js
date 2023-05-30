import {
  CalendarIcon,
  CommentIcon,
  ComponentIcon,
  HomeIcon,
  UsersIcon,
} from "@sanity/icons";

// This is strictly for singleton documents, nothing else

export const routes = [
  {
    title: "Home",
    slug: "home",
    location: "/",
    schemaType: "homePage",
    icon: HomeIcon,
  },
  {
    title: "About",
    slug: "about",
    location: "/about",
    schemaType: "aboutPage",
    icon: UsersIcon,
  },
  {
    title: "Events",
    slug: "events",
    location: "/events",
    schemaType: "eventsPage",
    icon: CalendarIcon,
  },
  {
    title: "Community",
    slug: "community",
    location: "/community",
    schemaType: "communityPage",
    icon: ComponentIcon,
  },
  {
    title: "Contact",
    slug: "contact",
    location: "/contact",
    schemaType: "contactPage",
    icon: CommentIcon,
  },
];
