import event from "./documents/event";
import teamMember from "./documents/teamMember";
import dateRange from "./objects/dateRange";
import aboutPage from "./pages/aboutPage";
import aboutSection from "./pages/aboutPage/aboutSection";
import communityPage from "./pages/communityPage";
import eventsPage from "./pages/eventsPage";
import homePage from "./pages/homePage";
import location from "./objects/location";
import blogPost from "./documents/blogPost";
import link from "./objects/link";
import eventTag from "./documents/eventTag";
import homeAboutSection from "./pages/homePage/homeAboutSection";
import homeHero from "./pages/homePage/homeHero";
import homePhotoWall from "./pages/homePage/homePhotoWall";
import homeEventsSection from "./pages/homePage/homeEventsSection";
import homeCommunitySection from "./pages/homePage/homeCommunitySection";
import heroCommunityCard from "./pages/homePage/heroCommunityCard";
import aboutCard from "./pages/aboutPage/aboutCard";
import homeEventsCard from "./pages/homePage/homeEventsCard";
import resource from "./documents/resource";
import resourceTag from "./documents/resourceTag";
import aboutNewsCard from "./pages/aboutPage/aboutNewsCard";
import aboutHeaderSection from "./pages/aboutPage/aboutHeaderSection";
import homeBigQuote from "./pages/homePage/homeBigQuote";
import eventsHeaderSection from "./pages/eventsPage/eventsHeaderSection";
import eventsTypeCard from "./pages/eventsPage/eventsTypeCard";
import contactPage from "./pages/contactPage";

import { routes } from "../lib/routes";

export const singletonTypes = new Set(routes.map((route) => route.schemaType));
export const singletonActions = new Set([
  "publish",
  "discardChanges",
  "restore",
]);

export const schema = {
  types: [
    homePage,
    aboutPage,
    eventsPage,
    communityPage,
    contactPage,
    aboutSection,
    teamMember,
    event,
    dateRange,
    location,
    blogPost,
    link,
    eventTag,
    homeAboutSection,
    homeHero,
    homePhotoWall,
    homeEventsSection,
    homeCommunitySection,
    heroCommunityCard,
    homeBigQuote,
    aboutCard,
    homeEventsCard,
    resource,
    resourceTag,
    aboutNewsCard,
    aboutHeaderSection,
    eventsHeaderSection,
    eventsTypeCard,
  ],
  templates: (templates) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
};
