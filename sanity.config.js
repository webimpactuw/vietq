import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { theme } from "https://themer.sanity.build/api/hues?default=9a8bbd&primary=9e80f4&transparent=9b8dbb&positive=43d675;300&caution=fbd024;200&lightest=fcfcfd&darkest=0f0d15";

import { visionTool } from "@sanity/vision";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { media } from "sanity-plugin-media";

import { schemaTypes } from "./sanity/schemas";
import { BlockContentIcon, UsersIcon } from "@sanity/icons";

import { Logo } from "./sanity/plugins/my-studio-logo/Logo";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(["homePage", "aboutPage"]);

import Iframe from "sanity-plugin-iframe-pane";

export default defineConfig({
  theme,
  basePath: "/admin",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  title: "VietQ CMS",
  apiVersion: process.env.SANITY_API_VERSION,
  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title("Site Information")
          .items([
            S.listItem()
              .title("Home Page")
              .id("homePage")
              .icon(BlockContentIcon)
              .child(
                S.document()
                  .schemaType("homePage")
                  .documentId("homePage")
                  .views([
                    S.view.form(),
                    S.view
                      .component(Iframe)
                      .options({
                        url: `http://localhost:3000/api/preview`,
                      })
                      .title("Preview"),
                  ])
              ),
            S.listItem()
              .title("About Page")
              .id("aboutPage")
              .icon(BlockContentIcon)
              .child(
                S.document()
                  .schemaType("aboutPage")
                  .documentId("aboutPage")
                  .views([
                    S.view.form(),
                    S.view
                      .component(Iframe)
                      .options({
                        url: `http://localhost:3000/api/preview?slug=about`,
                      })
                      .title("Preview"),
                  ])
              ),
            orderableDocumentListDeskItem({
              type: "teamMember",
              title: "Team Members",
              icon: UsersIcon,
              S,
              context,
            }),
          ]);
      },
    }),
    media(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
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
