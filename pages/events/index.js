import RootLayout from "@/components/global/RootLayout";
import EventTypes from "@/components/pages/events/EventTypes";
import Header from "@/components/pages/events/Header";
import PastEvents from "@/components/pages/events/PastEvents";

import dynamic from "next/dynamic";
const UpcomingEvents = dynamic(() =>
  import("@/components/pages/events/UpcomingEvents")
);

export default function Events({}) {
  return (
    <RootLayout title="Events" navTransparent={true}>
      <EventsPage />
    </RootLayout>
  );
}

function EventsPage({}) {
  return (
    <>
      <Header />
      <EventTypes />
      <UpcomingEvents />
      <PastEvents />
    </>
  );
}
