import Container from "@/components/global/Container";
import Image from "next/image";

import graphic from "@/public/media/404-graphic.png";
import Link from "next/link";
import { FilledButton, OutlinedButton } from "@/components/global/Button";

export const metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <Container>
      <div className="py-48 grid md:grid-cols-2 gap-8">
        <div className="flex md:items-start justify-center flex-col space-y-4 md:max-w-lg md:text-left text-center">
          <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter">
            Huh, that’s weird.
          </h1>
          <p className="text-gray-700 font-medium text-lg md:text-xl tracking-tight">
            Sorry, the page you’re looking for has either been moved or doesn’t
            exit.
          </p>
          <div className="space-x-4 mx-auto md:mx-0">
            <Link href="/">
              <FilledButton>Go to home</FilledButton>
            </Link>
            <Link href="/contact">
              <OutlinedButton>Contact Us</OutlinedButton>
            </Link>
          </div>
        </div>
        <div>
          <Image src={graphic} className="w-128" alt="404 error" />
        </div>
      </div>
    </Container>
  );
}
