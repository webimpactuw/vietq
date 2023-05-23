import RootLayout from "@/components/global/RootLayout";
import Container from "@/components/global/Container";

import Image from "next/image";

import client from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Header from "@/components/pages/community/Header";
import FromTheBlog from "@/components/pages/community/FromTheBlog";
import { LinkIcon } from "@heroicons/react/20/solid";
import PreviewLoading from "@/components/sanity/PreviewLoading";
import { PreviewSuspense } from "next-sanity/preview";
import ExitPreview from "@/components/sanity/ExitPreview";
import UniversalResourceCard from "@/components/cards/UniversalResourceCard";

import useSWR from "swr";
import { useState } from "react";
import Pagination from "@/components/global/Pagination";

const query = groq`*[_type == "communityPage"][0] {
    ...,
    heroImage {
      ...,
      "lqip": asset->metadata.lqip,
    },
  "resourceTags": *[_type == "resourceTag"],
  "resources": *[_type == "resource" || _type == "blogPost"] | order(_updatedAt desc) {
    _type,
    _updatedAt,
    _createdAt,
    title,
    description,
    "slug": slug.current,
    "author": author->{
      name,
      image,
    },
    link,
    date,
    image {
      ...,
      "lqip": asset->metadata.lqip,
    },
    tags[]->{
      title,
      slug,
    },
    content[_type=="block" && style=="normal"]
  }
}`;

// export async function getStaticProps() {
//   const data = await client.fetch(groq`
//     *[_type == "blogPost"] {
//       title,
//       "slug": slug.current,
//       "author": author->{
//         name,
//         image,
//       },
//       date,
//       image {
//         ...,
//         "lqip": asset->metadata.lqip
//       },
//       content[_type=="block" && style=="normal"]
//     }`);

//   return {
//     props: {
//       data,
//     },
//   };
// }

export async function getStaticProps({ preview = false }) {
  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query);

  return {
    props: { preview, data },
    revalidate: parseInt(process.env.NEXT_PUBLIC_REVALIDATE),
  };
}

export default function Community({ preview, data }) {
  return (
    <RootLayout title="Community" navTransparent={true} preview={preview}>
      {preview ? (
        <PreviewSuspense fallback={<PreviewLoading />}>
          <PreviewCommunityPage query={query} />
        </PreviewSuspense>
      ) : (
        <CommunityPage data={data} />
      )}
    </RootLayout>
  );
}

function CommunityPage({ data }) {
  return (
    <>
      <Header data={data} />
      <FromTheBlog />
      {/* <Container>
        <Resources />
        {JSON.stringify(data)}
      </Container> */}
      <AllResources />
    </>
  );
}

const fetcher = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_SERVER_API_KEY}`,
    },
  }).then((res) => res.json());

function AllResources() {
  const [pageIndex, setPageIndex] = useState(0);

  const { data, isLoading, error } = useSWR(
    `/api/community?page=${pageIndex}`,
    fetcher
  );

  return (
    <Container>
      <div className="pt-24 pb-32 relative z-10 space-y-4">
        <h2 className="font-display text-6xl tracking-tighter font-semibold ">
          All Resources
        </h2>
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data && !error
              ? data.resources.map((resource) => (
                  <UniversalResourceCard
                    resource={resource}
                    key={resource.slug}
                  />
                ))
              : null}
          </div>
          <Pagination
            pageCount={data?.totalPages}
            setPageIndex={setPageIndex}
          />
        </div>
      </div>
    </Container>
  );
}

function PreviewCommunityPage({ query }) {
  const data = usePreview(null, query);

  return (
    <>
      <CommunityPage data={data} />
      <ExitPreview />
    </>
  );
}

function Resources() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ResourceCard />
      <ResourceCard red={true} />
      <ResourceCard />
    </div>
  );
}

function ResourceCard({ red = false }) {
  return (
    <div className="rounded-xl border overflow-hidden bg-champagne-50 border-champagne-700/25 hover:opacity-75 transition-opacity">
      <Image
        src="/sample/landscape.png"
        width={1920}
        height={1280}
        className="w-full border-b border-champagne-700/25"
      />
      <div className="p-4 space-y-2">
        <div className="flex flex-wrap gap-2">
          <ResourcePill />
          <ResourcePill red={red} />
        </div>
        <h3 className="text-lg font-semibold font-display tracking-tight line-clamp-2">
          this is the title
        </h3>
        <p className="h-12 text-sm text-gray-700 line-clamp-2">
          Quick one to two sentence description of the resource
        </p>
        <div className="border-t border-champagne-700/25 pt-4 flex items-center justify-start space-x-1">
          <LinkIcon className="w-4 h-4 text-gray-700" />
          <p className="text-gray-700 text-xs font-medium">example.com</p>
        </div>
      </div>
      <div
        className={`h-2 bg-gradient-to-r ${
          red ? "from-blue-500 to-red-500" : "from-blue-500 to-blue-500"
        } w-full`}
      />
    </div>
  );
}

function ResourcePill({ red = false }) {
  return (
    <div
      className={`${
        red ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
      } text-xs font-medium tracking-tight px-2.5 pt-1 pb-1.5 rounded-full`}
    >
      {red ? "Red Pill" : "Blue Pill"}
    </div>
  );
}

function RecentResources() {
  return <div></div>;
}
