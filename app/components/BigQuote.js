import Container from "@/components/global/Container";
import { urlFor } from "@/sanity/lib/urlFor";
import Image from "next/image";

export default function BigQuote({ data }) {
  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' opacity='1' viewBox='0 0 290 290' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M159.787 129.128L149.327 140.2C128.3 75.7796 185.576 -20.3481 284.809 3.80952L273.353 14.8818C223.436 -4.74607 142.745 51.1186 159.787 129.128Z' fill='%23F2E1CF'/%3E%3Cpath d='M274.242 15.3852L285.699 4.3129C306.726 68.7332 248.952 165.364 149.719 141.207L160.179 129.631C210.095 149.259 291.285 93.3942 274.242 15.3852Z' fill='%23F2E1CF'/%3E%3Cpath d='M159.787 160.872L149.327 149.8C128.3 214.22 185.576 310.348 284.809 286.19L273.353 275.118C223.436 294.746 142.745 238.881 159.787 160.872Z' fill='%23F2E1CF'/%3E%3Cpath d='M274.242 274.615L285.699 285.687C306.726 221.267 248.952 124.636 149.719 148.793L160.179 160.369C210.095 140.741 291.285 196.606 274.242 274.615Z' fill='%23F2E1CF'/%3E%3Cpath d='M130.213 129.128L140.673 140.2C161.7 75.7796 104.424 -20.3481 5.19099 3.80952L16.6471 14.8818C66.5638 -4.74607 147.255 51.1186 130.213 129.128Z' fill='%23F2E1CF'/%3E%3Cpath d='M15.7578 15.3852L4.30127 4.3129C-16.7258 68.7332 41.0485 165.364 140.281 141.207L129.821 129.631C79.9049 149.259 -1.28451 93.3942 15.7578 15.3852Z' fill='%23F2E1CF'/%3E%3Cpath d='M130.213 160.872L140.673 149.8C161.7 214.22 104.424 310.348 5.19099 286.19L16.6471 275.118C66.5638 294.746 147.255 238.881 130.213 160.872Z' fill='%23F2E1CF'/%3E%3Cpath d='M15.7578 274.615L4.30127 285.687C-16.7258 221.267 41.0485 124.636 140.281 148.793L129.821 160.369C79.9049 140.741 -1.28451 196.606 15.7578 274.615Z' fill='%23F2E1CF'/%3E%3Cpath d='M159.787 129.128L149.327 140.2C128.3 75.7796 185.576 -20.3481 284.809 3.80952L273.353 14.8818C223.436 -4.74607 142.745 51.1186 159.787 129.128Z' stroke='%23F2E1CF'/%3E%3Cpath d='M274.242 15.3852L285.699 4.3129C306.726 68.7332 248.952 165.364 149.719 141.207L160.179 129.631C210.095 149.259 291.285 93.3942 274.242 15.3852Z' stroke='%23F2E1CF'/%3E%3Cpath d='M159.787 160.872L149.327 149.8C128.3 214.22 185.576 310.348 284.809 286.19L273.353 275.118C223.436 294.746 142.745 238.881 159.787 160.872Z' stroke='%23F2E1CF'/%3E%3Cpath d='M274.242 274.615L285.699 285.687C306.726 221.267 248.952 124.636 149.719 148.793L160.179 160.369C210.095 140.741 291.285 196.606 274.242 274.615Z' stroke='%23F2E1CF'/%3E%3Cpath d='M130.213 129.128L140.673 140.2C161.7 75.7796 104.424 -20.3481 5.19099 3.80952L16.6471 14.8818C66.5638 -4.74607 147.255 51.1186 130.213 129.128Z' stroke='%23F2E1CF'/%3E%3Cpath d='M15.7578 15.3852L4.30127 4.3129C-16.7258 68.7332 41.0485 165.364 140.281 141.207L129.821 129.631C79.9049 149.259 -1.28451 93.3942 15.7578 15.3852Z' stroke='%23F2E1CF'/%3E%3Cpath d='M130.213 160.872L140.673 149.8C161.7 214.22 104.424 310.348 5.19099 286.19L16.6471 275.118C66.5638 294.746 147.255 238.881 130.213 160.872Z' stroke='%23F2E1CF'/%3E%3Cpath d='M15.7578 274.615L4.30127 285.687C-16.7258 221.267 41.0485 124.636 140.281 148.793L129.821 160.369C79.9049 140.741 -1.28451 196.606 15.7578 274.615Z' stroke='%23F2E1CF'/%3E%3C/svg%3E")`,
      }}
    >
      <Container>
        <div className="md:pt-24 pt-12 md:pb-16 pb-8 space-y-4 md:space-y-12 relative">
          <div
            className="text-[15rem] md:text-[30rem] absolute -top-20 md:-top-24 left-0 md:-left-16 select-none pointer-events-none"
            style={{
              color: "#D8BFA5",
            }}
          >
            &ldquo;
          </div>
          <h2 className="text-5xl md:text-8xl font-display tracking-tighter font-semibold leading-none md:leading-none relative">
            {data.quote}
          </h2>
          <div>
            <a
              href="https://www.seattlefoundation.org/asian-american-and-pacific-islander-heritage-month-vietq-a-neighbor-to-neighbor-grantee/"
              className="hover:opacity-75 transition-opacity inline-block"
            >
              <Image
                src={urlFor(data.image).auto("format").url()}
                className="h-12 md:h-16 w-auto object-contain "
                alt={data.title}
                width={500}
                height={500}
              />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
