import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BlockContentIcon,
  CalendarIcon,
  LaunchIcon,
  MasterDetailIcon,
  UsersIcon,
} from "@sanity/icons";
import { routes } from "../lib/routes";

export default (S, context) => {
  return S.list()
    .title("Site Information")
    .items([
      S.listItem()
        .title("Site Pages")
        .icon(MasterDetailIcon)
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
        .icon(CalendarIcon)
        .child(
          S.list()
            .title("Events")
            .items([
              S.listItem()
                .title("Upcoming Events")
                .icon(ArrowUpIcon)
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
                .icon(ArrowDownIcon)
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
                .icon(CalendarIcon)
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
        .icon(BlockContentIcon)
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
      S.listItem()
        .title("Resources")
        .icon(LaunchIcon)
        .child(
          S.documentTypeList("resource")
            .title("Resources")
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType("resource")
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

function singlePage(S, title, type, icon = BlockContentIcon) {
  return S.listItem()
    .title(title)
    .id(type)
    .icon(icon)
    .child(
      S.document().schemaType(type).documentId(type).views([S.view.form()])
    );
}
