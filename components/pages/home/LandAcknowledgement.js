import { GlobeAmericasIcon } from "@heroicons/react/24/outline";

export default function LandAcknowledgement() {
  return (
    <div className="mx-auto max-w-3xl pb-8 pt-4 space-y-4">
      <GlobeAmericasIcon className="w-8 h-8 mx-auto" />
      <p className="text-center uppercase tracking-wider font-medium text-xs font-display">
        We would like to acknowledge that we are on the traditional land of the
        first people of Seattle, the Duwamish People. Many of us are spread
        across different areas of Washington with that said so we would also
        acknowledge the Coast Salish people and the tribes, bands, and nations
        that exist past, present, and future, and in honor with gratitude the
        land itself and the Duwamish Tribe and Coast Salish people.
      </p>
    </div>
  );
}
