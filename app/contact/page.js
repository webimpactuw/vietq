export const revalidate = 30

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

import Container from "@/components/global/Container";
import Socials from "@/app/contact/components/Socials";

import Header from "./components/Header";
import ContactForm from "./components/ContactForm";

export default async function ContactPage() {
  const data = await getContactData();

  return (
    <>
      <Header data={data} />
      <Container>
        <div className="grid md:grid-cols-5 gap-32 pt-12">
          <div className="col-span-3">
            <ContactForm />
          </div>
          <div className="col-span-2">
            <Socials />
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getContactData() {
  const query = groq`*[_type == "contactPage"][0] {
 heroImage {
    ...,
    "lqip": asset->metadata.lqip,
 }
}`;

  const data = await client.fetch(query);

  return data;
}
