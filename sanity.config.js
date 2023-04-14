import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { visionTool } from "@sanity/vision";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { media } from "sanity-plugin-media";

import { schemaTypes } from "./sanity/schemas";
import { BlockContentIcon, DocumentsIcon, UsersIcon } from "@sanity/icons";

import { Logo } from "./sanity/plugins/my-studio-logo/Logo";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(routes.map((route) => route.schemaType));

import Iframe from "sanity-plugin-iframe-pane";

import { routes } from "./sanity/lib/routes";
import { colorInput } from "@sanity/color-input";

export default defineConfig({
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
              .title("Site Pages")
              .icon(DocumentsIcon)
              .child(
                S.list()
                  .title("Site Pages")
                  .items(
                    routes.map((route) =>
                      singlePage(
                        S,
                        route.title,
                        route.schemaType,
                        route.slug,
                        route.icon
                      )
                    )
                  )
              ),
            orderableDocumentListDeskItem({
              type: "teamMember",
              title: "Team Members",
              icon: UsersIcon,
              S,
              context,
            }),
            S.listItem()
              .title("Events")
              .icon(DocumentsIcon)
              .child(
                S.documentTypeList("event")
                  .title("Events")
                  .child((documentId) =>
                    S.document()
                      .documentId(documentId)
                      .schemaType("event")
                      .views([S.view.form()])
                  )
              ),
          ]);
      },
    }),
    media(),
    visionTool(),
    colorInput(),
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

function singlePage(S, title, type, previewSlug = "", icon = BlockContentIcon) {
  return S.listItem()
    .title(title)
    .id(type)
    .icon(icon)
    .child(
      S.document()
        .schemaType(type)
        .documentId(type)
        .views([
          S.view.form(),
          S.view
            .component(Iframe)
            .options({
              url: `${process.env.NEXT_PUBLIC_HOST}/api/preview${
                previewSlug.length > 0 ? `?slug=${previewSlug}` : ""
              }`,
            })
            .title("Preview"),
        ])
    );
}
