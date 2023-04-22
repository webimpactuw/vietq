import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import { googleMapsInput } from "@sanity/google-maps-input";
import { colorInput } from "@sanity/color-input";
import { Logo } from "./sanity/plugins/my-studio-logo/Logo";

import { routes } from "./sanity/lib/routes";
import deskStructure from "./sanity/src/deskStructure";
import { schemaTypes } from "./sanity/schemas";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(routes.map((route) => route.schemaType));

export default defineConfig({
  basePath: "/admin",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  title: "VietQ CMS",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    media(),
    visionTool(),
    colorInput(),
    googleMapsInput({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    }),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  studio: {
    components: {
      logo: Logo,
    },
  },
});
