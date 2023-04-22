import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import Iframe from "sanity-plugin-iframe-pane";
import { BlockContentIcon, DocumentsIcon, UsersIcon } from "@sanity/icons";
import { routes } from "../lib/routes";

export default (S, context) => {
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
      S.listItem()
        .title("Events")
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title("Events")
            .items([
              S.listItem()
                .title("Upcoming Events")
                .icon(DocumentsIcon)
                .child(
                  S.documentTypeList("event")
                    .title("Upcoming Events")
                    .filter('_type == "event" && dateRange.start > now()')
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType("event")
                        .views([S.view.form()])
                    )
                ),
              S.listItem()
                .title("Past Events")
                .icon(DocumentsIcon)
                .child(
                  S.documentTypeList("event")
                    .title("Past Events")
                    .filter('_type == "event" && dateRange.start < now()')
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType("event")
                        .views([S.view.form()])
                    )
                ),
              S.listItem()
                .title("All Events")
                .icon(DocumentsIcon)
                .child(
                  S.documentTypeList("event")
                    .title("All Events")
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType("event")
                        .views([S.view.form()])
                    )
                ),
            ])
        ),
      S.listItem()
        .title("Blog Posts")
        .icon(DocumentsIcon)
        .child(
          S.documentTypeList("blogPost")
            .title("Blog Posts")
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType("blogPost")
                .views([S.view.form()])
            )
        ),
      orderableDocumentListDeskItem({
        type: "teamMember",
        title: "Team Members",
        icon: UsersIcon,
        S,
        context,
      }),
    ]);
};

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
