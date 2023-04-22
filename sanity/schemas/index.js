import event from "./documents/event";
import teamMember from "./documents/teamMember";
import dateRange from "./objects/dateRange";
import aboutPage from "./pages/aboutPage";
import aboutSection from "./pages/aboutPage/aboutSection";
import communityPage from "./pages/communityPage";
import eventsPage from "./pages/eventsPage";
import homePage from "./pages/homePage";
import location from "./objects/location";

export const schemaTypes = [
  homePage,
  aboutPage,
  eventsPage,
  communityPage,
  aboutSection,
  teamMember,
  event,
  dateRange,
  location,
];
