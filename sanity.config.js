import { defineConfig } from "sanity";

import { apiVersion, dataset, projectId } from "./sanity/env";

import { schema, singletonActions, singletonTypes } from "./sanity/schemas";
import { structureTool } from "sanity/structure";
import deskStructure from "./sanity/src/deskStructure";
import { media } from "sanity-plugin-media";
import { visionTool } from "@sanity/vision";
import { googleMapsInput } from "@sanity/google-maps-input";
import { colorInput } from "@sanity/color-input";

export default defineConfig({
  basePath: "/admin",
  name: "default",
  title: "VietQ Studio",
  projectId,
  dataset,
  apiVersion,
  schema,
  plugins: [
    structureTool({
      structure: (S, context) => deskStructure(S, context),
    }),
    media(),
    visionTool(),
    googleMapsInput({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    }),
    colorInput(),
  ],
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
