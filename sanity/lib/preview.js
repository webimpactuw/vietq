import { definePreview } from "next-sanity/preview";

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}
export const usePreview = definePreview({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  onPublicAccessOnly,
});
