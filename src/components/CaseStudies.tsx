import Image from "next/image";
import { PrimaryButton, StaticButton } from "./Buttons";
import ListAnchor from "./list-anchor";

export default function CaseStudies() {
  return (
    <section className="bg-stone-50 p-5 pb-32 text-stone-900">
      <div className="container mx-auto flex">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-28">
          <div className="order-1 flex w-full flex-col gap-8 lg:order-first lg:gap-48">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 font-semibold text-stone-900">
                <ListAnchor backgroundColor="#000" /> Case studies
              </div>
              <div>
                <h2 className="text-3xl font-medium text-stone-900 lg:text-5xl">
                  <span className="text-neutral-500">
                    We take pride in building
                  </span>{" "}
                  strong relationships with businesses
                  <span className="text-neutral-500">
                    {" "}
                    across various industries.
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="font-semibold text-black">
                    “Logis has transformed our logistics operations! Their
                    on-time deliveries and professional service have helped us
                    scale our business effortlessly. We trust them with every
                    shipment!”
                  </p>
                </div>
                <hr className="border-neutral-200" />
                <div>
                  <p className="text-neutral-500">
                    Michael R., Supply Chain Manager
                  </p>
                </div>
              </div>
              <div className="flex gap-10">
                <div>
                  <PrimaryButton text="Read more" />
                </div>
                <div className="inline-flex items-center">
                  <StaticButton text="Why choose us" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-96 w-full overflow-hidden rounded-xl lg:h-full">
            <div className="absolute top-0 left-0">
              <Image
                src={"/person.jpg"}
                alt=""
                width={990}
                height={1020}
                className="h-full w-full object-cover object-[49%_25.9%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
